import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_FAIL, LOGIN_USER_SUCESS, LOGIN_USER } from './types';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (pwd) => {
    return {
        type: PASSWORD_CHANGED,
        payload: pwd
    }
}

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER })
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                loginUserSucess(dispatch, user);
                console.log(user);
            }).catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(() => { loginUserSucess(dispatch, user); })
                    .catch(loginUserFail(dispatch))
            });
    }
}

const loginUserFail = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL })
}
const loginUserSucess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCESS,
        payload: user
    });
    Actions.main()
}