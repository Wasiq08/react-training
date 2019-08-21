
import React, { Fragment, Component } from 'react';
import { View, Text } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import ReduxThunk from 'redux-thunk'
import Router from './Router';

class App extends Component {

  componentDidMount() {
    const config = {
      apiKey: "AIzaSyCoebwHW-wHGgmPYSxUryoqzoXxTTUGdbE",
      authDomain: "react-native-ad9ff.firebaseapp.com",
      databaseURL: "https://react-native-ad9ff.firebaseio.com",
      projectId: "react-native-ad9ff",
      storageBucket: "",
      messagingSenderId: "802940173570",
      appId: "1:802940173570:web:71abcb7587986694"
    };
    // Initialize Firebase
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))} >
        <Router></Router>
      </Provider>
    );
  }

}

export default App;
