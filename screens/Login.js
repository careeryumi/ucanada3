import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {globalStyles} from '../styles/global';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
// import LoadingScreen from 'LoadingScreen';
import LoginScreen from './LoginScreen';
// import DashBoardScreen from 'DashBoardScreen';

export default class Login extends React.Component{
    render(){
        return <AppNavigator />;
    }
}

const AppSwitchNavigator = createSwitchNavigator({
    LoginScreen: LoginScreen,
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
    },
});

