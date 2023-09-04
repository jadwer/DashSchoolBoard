import { Text, View } from 'react-native'
import React, { Component } from 'react'

export class Logout extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.navigation.replace("Login");
    }

    render() {
    return (
      <View>
        <Text>Logout</Text>
      </View>
    )
  }
}

export default Logout