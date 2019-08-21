import React, { Component } from 'react';
import { CardSection, Input } from './common';
import { employeeUpdate } from '../actions';
import { connect } from 'react-redux';
import {View } from 'react-native';
import { Picker, Text } from 'react-native';


class EmployeeForm extends Component {
    render() {
        return (
            <View>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Name"
                        value={this.props.name}
                        onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="phone"
                        placeholder="555-555-555"
                        value={this.props.phone}
                        onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
                    />

                </CardSection>

                <CardSection style={{ flexDirection: 'column' }}>
                    <Text>Shift</Text>
                    <Picker
                        selectedValue={this.props.shift}
                        style={{ height: 50, width: 100 }}
                        onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })} >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tueday" value="Tueday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Tursday" value="Tursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                </CardSection>

            </View>
        )
    }

}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift }
}


export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm) 