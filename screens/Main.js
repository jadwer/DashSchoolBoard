import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MenuButton from "../components/MenuButton";

export default class Main extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>App Sin Título</Text>
        <MenuButton nav={this.props.navigation} titulo="Recuerdame"/>
        <MenuButton nav={this.props.navigation} titulo="Calendario"/>
        <MenuButton nav={this.props.navigation} titulo="Mochila"/>
        <MenuButton nav={this.props.navigation} titulo="Horario"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5653D4"
  },
  text: {
    color: "#ffff",
    fontSize: 30
  }
});
