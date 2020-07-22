import React, { Component } from 'react';
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native';
import firebase from 'firebase';

class LoadingScreen extends React.Component{

    componentDidMount(){
        this.checkIfLoggedIn();
    }

    checkIfLoggedIn = () =>{
        firebase.auth().onAuthStateChanged(
            function(user) {
            if(user)
            {
                this.props.navigation.navigate('DashboardScreen');
            }
            else{
                this.props.navigation.navigate('LoginScreen');
            }
        }.bind(this)
        );
    };

    render(){
        return (
            <View style={styles.container}>
                {/* <Text>Loading screen</Text> */}
                <ActivityIndicator size="large" />
            </View>
        );
    }
}

export default LoadingScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
    },
});

