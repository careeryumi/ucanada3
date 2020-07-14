import React, { Component } from 'react';
import {StyleSheet, View, Text} from 'react-native';

class LoginScreen extends React.Component{
    render(){
        return (
            <View style={StyleSheet.container}>
                <Text>This is a Login Screen..</Text>
            </View>
        );
    }
}

export default LoginScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
    },
});

