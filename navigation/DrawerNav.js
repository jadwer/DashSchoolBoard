import React, { Component } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainStackNav from './MainStackNav';
import Perfil from '../screens/Perfil';
import Logout from '../components/Logout';

const Drawer = createDrawerNavigator();

export default class DrawerNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Drawer.Navigator initialRouteName="Pagina principal">
        <Drawer.Screen name="Pagina principal" component={MainStackNav} />
        <Drawer.Screen name="Perfil" component={Perfil} />
        <Drawer.Screen name="Salir" component={Logout} />
      </Drawer.Navigator>
    );
  }
}