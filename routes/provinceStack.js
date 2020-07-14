import { createStackNavigator } from 'react-navigation-stack';
import Province from '../screens/province';
import Header from '../shared/header';
import React from 'react';

const screens = {
    Province: {
      screen: Province,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: () => <Header navigation={navigation} title='Province' />,
        }
      }
    },
  }
  
  const ProvinceStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
      headerTintColor: '#444',
      headerStyle: { backgroundColor: '#eee', height: 60 },
    }
  });
  
  export default ProvinceStack;