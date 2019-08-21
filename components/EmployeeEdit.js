import React, { Component } from 'react';
import { Card, CardSection, Input, Button ,Confirm } from './common/index';
import EmployeeForm from './EmployeeForm';

import { connect } from 'react-redux';
import { employeeUpdate, employeeSave , employeeDelete} from '../actions';
import { Text } from 'react-native';
import _ from 'lodash';
import Communications from 'react-native-communications'


class EmployeeEdit extends Component {
    arrayObject = [];
    state = { showModal: false };
    componentDidMount() {
        const { item } = this.props.employee
        console.log('edit form------', this.props.employee)
        _.each(item, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
            this.arrayObject.push({ name: prop, value: value });
        })
    }

    onButtonPress() {
        const { name, phone, shift } = this.props;
        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid })
    }
    onTxtPress() {
        const { phone } = this.props;
        Communications.text(phone, "HEllo buddy");
    }
    onAccept(){
        const uid  = this.props.employee.uid
        this.props.employeeDelete({ uid });
    }
    onDecline(){
        this.setState({showModal:false})
    }

    render() {
        return (
            <Card>
                <Text>{this.props.a}</Text>
                <EmployeeForm />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onTxtPress.bind(this)}>
                        Text
                    </Button>
                </CardSection>


                <CardSection>
                    <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
                        Fire Employee
                    </Button>
                </CardSection>

                <Confirm visible={this.state.showModal} onAccept={()=>this.onAccept()} onDecline={()=>this.onDecline()}>
                    Are you sure you want to delete
                </Confirm>
            </Card>
        )
    }


}

const mapStateToProps = state => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift }
}

export default connect(mapStateToProps, { employeeUpdate, employeeSave , employeeDelete})(EmployeeEdit);