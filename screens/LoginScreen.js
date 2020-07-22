import React, { Component } from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import Expo from 'expo';
import * as Google from 'expo-google-app-auth';

class LoginScreen extends React.Component{

    signInWithGoogleAsync = async () => {
        try {
          const result = await Google.logInAsync({
            androidClientId: '469980143557-q7mm984ee57psuqqij8n62q5i4cdmtap.apps.googleusercontent.com',
            behavior: 'web',
            // iosClientId: '469980143557-3nnije48at6kpl0ulksqj6qohhle0u0j.apps.googleusercontent.com',
            scopes: ['profile', 'email'],
          });
      
          if (result.type === 'success') {
            return result.accessToken;
          } else {
            return { cancelled: true };
          }
        } catch (e) {
          return { error: true };
        }
      }

    render(){
        return (
            <View style={styles.container}>
                <Button 
                    title="Sign in with google"
                    onPress={() => this.signInWithGoogleAsync()}
                />
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

