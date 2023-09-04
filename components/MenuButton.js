import { Text, TouchableOpacity, View } from "react-native";
import React, { Component } from "react";

export class MenuButton extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
        <TouchableOpacity onPress={()=>{this.props.nav.navigate(this.props.titulo)}}>
            <Text>{this.props.titulo}</Text>
        </TouchableOpacity>
  );
  }
}

export default MenuButton;
