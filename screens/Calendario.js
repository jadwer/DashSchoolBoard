import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import CalendarPicker from 'react-native-calendar-picker';

export default class Calendario extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Pantalla de Calendario</Text>
        <CalendarPicker
          onDateChange={this.onDateChange}
        />

        <View>
        </View>
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
