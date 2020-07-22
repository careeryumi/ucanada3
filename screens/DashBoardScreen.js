import React, { Component } from 'react';
import {StyleSheet, View, Text} from 'react-native';

class DashboardScreen extends React.Component{
    render(){
        return (
            <View style={StyleSheet.container}>
                <Text>This is a Dashboard..</Text>
            </View>
        );
    }
}

export default DashboardScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
    },
});

