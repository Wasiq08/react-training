import React, { Component } from 'react';
import { CardSection } from './common';
import { Text , View ,TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';

class ListItem extends Component {

    onRowPress(){
        Actions.employeeEdit({ employee: this.props.employee , a:'wasiq'});
    }

    render() {
        console.log('list----------', this.props.employee);
        const { item } = this.props.employee;
        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>{item.name}</Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        )
    }

}

const styles = {
    titleStyle: {
        fontSize: 20,
        paddingLeft: 15
    }
}


export default ListItem