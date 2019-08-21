import React, { Component } from 'react';
import { CardSection, Button, Input, Card, Spinner } from '../components/common';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { View, Text } from 'react-native'
class LoginForm extends Component {

    onEmailChange(text) {
        console.log('testing', text);
        this.props.emailChanged(text)
    }
    onPasswordChange(text) {
        console.log('testing', text);
        this.props.passwordChanged(text)
    }
    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }
    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />;
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>Login</Button>
        )
    }
    renderError() {
        if (this.props.error) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.errorTextStyle}>{this.props.error}</Text>
                </View>
            )
        }
    }
    render() {
        return (
            <Card>
                <CardSection>
                    <Input placeholder="abc@gmail.com" label="Email" onChangeText={this.onEmailChange.bind(this)} value={this.props.email}>
                    </Input>
                </CardSection>

                <CardSection>
                    <Input label="Password" secureTextEntry placeholder="password" onChangeText={this.onPasswordChange.bind(this)} value={this.props.password} />
                </CardSection>
                {this.renderError()}
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        )

    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        color: 'red'
    }
}
export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);