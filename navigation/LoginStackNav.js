import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LogIn from '../screens/LogIn';
import RegisterUser from '../screens/RegistroUsuario';
import DrawerNav from './DrawerNav'

const Stack = createStackNavigator();

export default class LoginStackNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Stack.Navigator initialRouteName="Login" screenOptions={{
    headerShown: false,
    gestureEnabled: false
  }}>
        <Stack.Screen name="Login" component={LogIn} />
        <Stack.Screen name="Registro" component={RegisterUser} />
        <Stack.Screen name="DrawerMenu" component={DrawerNav} />
      </Stack.Navigator>
    );
  }
}