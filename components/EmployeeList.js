import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { employeeFetch } from '../actions';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import ListItem from './ListItem';
import _ from 'lodash';

class EmployeeList extends Component {

    componentDidMount() {
        this.props.employeeFetch();
    }


    renderList(item) {
        return <ListItem employee={item} />
    }
    render() {
        console.log(this.props);
        return (
            <FlatList
                data={this.props.employees}
                renderItem={(item)=>this.renderList(item)}
            />
            // <View>
            //     <Text>A</Text>
            //     <Text>B</Text>
            //     <Text>C</Text>
            //     <Text>A</Text>
            // </View>
        )
    }


}

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid }
    })
    return { employees }
}
export default connect(mapStateToProps, { employeeFetch })(EmployeeList)