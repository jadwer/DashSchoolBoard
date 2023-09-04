import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "../screens/Main";
import Recuerdame from "../screens/Recuerdame";
import Calendario from "../screens/Calendario";
import Mochila from "../screens/Mochila";
import Horario from "../screens/Horario";

const Stack = createStackNavigator();

export default class MainStackNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Recuerdame" component={Recuerdame} />
        <Stack.Screen name="Calendario" component={Calendario} />
        <Stack.Screen name="Mochila" component={Mochila} />
        <Stack.Screen name="Horario" component={Horario} />
      </Stack.Navigator>
    );
  }
}
