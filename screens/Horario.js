import React, { Component } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import TimeTableView, { genTimeBlock } from "react-native-timetable";

const events_data = [
  {
    title: "Progra",
    startTime: genTimeBlock("MON", 9),
    endTime: genTimeBlock("MON", 10, 50),
    location: "Salón 2",
    extra_descriptions: ["Mr Gabo", "Miss Shay"],
  },
  {
    title: "Progra",
    startTime: genTimeBlock("WED", 14),
    endTime: genTimeBlock("WED", 15, 50),
    location: "Salón 2",
    extra_descriptions: ["Mr Gabo", "Miss Shay"],
  },
  {
    title: "Physics",
    startTime: genTimeBlock("MON", 11),
    endTime: genTimeBlock("MON", 11, 50),
    location: "Lab 404",
    extra_descriptions: ["Einstein"],
  },
  {
    title: "Physics",
    startTime: genTimeBlock("WED", 11),
    endTime: genTimeBlock("WED", 11, 50),
    location: "Lab 404",
    extra_descriptions: ["Einstein"],
  },
  {
    title: "Lunch",
    startTime: genTimeBlock("MON", 12),
    endTime: genTimeBlock("MON", 13),
    location: "Student Restaurant",
  },
  {
    title: "Lunch",
    startTime: genTimeBlock("TUE", 12),
    endTime: genTimeBlock("TUE", 13),
    location: "Student Cafeteria",
  },
  {
    title: "Lunch",
    startTime: genTimeBlock("WED", 12),
    endTime: genTimeBlock("WED", 13),
    location: "Student Cafeteria",
  },
  {
    title: "Lunch",
    startTime: genTimeBlock("THU", 12),
    endTime: genTimeBlock("THU", 13),
    location: "Student Cafeteria",
  },
  {
    title: "Lunch",
    startTime: genTimeBlock("FRI", 12),
    endTime: genTimeBlock("FRI", 13),
    location: "Student Restaurant",
  },
  {
    title: "Mandarin",
    startTime: genTimeBlock("TUE", 9),
    endTime: genTimeBlock("TUE", 10, 50),
    location: "Language Center",
    extra_descriptions: ["Chen"],
  },
  {
    title: "Japanese",
    startTime: genTimeBlock("FRI", 9),
    endTime: genTimeBlock("FRI", 10, 50),
    location: "Language Center",
    extra_descriptions: ["Nakamura"],
  },
  {
    title: "Club Activity",
    startTime: genTimeBlock("THU", 9),
    endTime: genTimeBlock("THU", 10, 50),
    location: "Activity Center",
  },
  {
    title: "Club Activity",
    startTime: genTimeBlock("FRI", 13, 30),
    endTime: genTimeBlock("FRI", 14, 50),
    location: "Activity Center",
  },
  {
    title: "Volunteer",
    startTime: genTimeBlock("MON", 13, 30),
    endTime: genTimeBlock("MON", 14, 50),
    location: "Community Hospital",
  },
  {
    title: "Volunteer",
    startTime: genTimeBlock("MON", 16),
    endTime: genTimeBlock("MON", 16, 50),
    location: "Community Hospital",
  },
];

export default class Horario extends Component {
  constructor(props) {
    super(props);
    this.numOfDays = 5;
    this.pivotDate = genTimeBlock("mon");
  }

  scrollViewRef = (ref) => {
    this.timetableRef = ref;
  };

  onEventPress = (evt) => {
    Alert.alert("onEventPress", JSON.stringify(evt));
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Pantalla de Horario</Text>
        <TimeTableView
          events={events_data}
          pivotTime={9}
          pivotEndTime={20}
          pivotDate={this.pivotDate}
          nDays={this.numOfDays}
          headerStyle={styles.headerStyle}
          formatDateHeader="dddd"
          locale="es"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#81E1B8',
  },
  container: {
    flex: 1,
    backgroundColor: "#5653D4",
  },
  text: {
    color: "#ffff",
    fontSize: 30,
  },
});
