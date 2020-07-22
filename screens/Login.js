import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {globalStyles} from '../styles/global';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Logged from './Logged.js';
import LoginPage from './LoginPage.js';
// import LoadingScreen from './LoadingScreen';
// import LoginScreen from './LoginScreen';
// import DashboardScreen from './DashboardScreen';

import firebase from 'firebase/app';
import 'firebase/auth';

import fire from './fire';

// import { firebaseConfig } from '../config';
// firebase.initializeApp(firebaseConfig);

class Login extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        user: null,
      };
  
      this.authListener = this.authListener.bind(this);
    }
  
    componentDidMount() {
      this.authListener();
    }
  
    authListener() {
      fire.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({ user });
        } else {
          this.setState({ user: null });
        }
      })
    }
  
    render() {
      return (
          <div>
            {this.state.user ? (<Logged/ >) : (<LoginPage/ >)}
          </div>

      );
    }
  }
  
  export default Login;