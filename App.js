import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';

import Home from './container/Home';
import Dashboard from './container/Dashboard';
import Login from './container/Login';


export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  Dashboard: {
    screen: Dashboard
  },
  Login: {
    screen: Login
  }
},
  {
    defaultNavigationOptions: {
      headerShown: false
    },
    initialRouteName: "Home"
  });

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});