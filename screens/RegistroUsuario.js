import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default class RegistroUsuario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      pass: "",
      confPass: "",
    };
  }

  registerUser(user, pass, confPass){
    user = user.trim().toLowerCase();

    if (pass === confPass) {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, user, pass)
        .then((userCredential) => {
          const userData = userCredential.user;
          console.log(`¡Usuario ${user} registrado correctamente!`);
          this.props.navigation.navigate("Login");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    } else {
      alert("Las contraseñas con coinciden, por favor, escríbelas nuevamente.");
    }
  }

  render() {
    const { user, pass, confPass } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Pantalla de Registro de Usuario</Text>
        <View>
          <TextInput
            autoFocus
            placeholder="nombre@correo.com"
            onChangeText={(text) => {
              this.setState({ user: text });
            }}
          />
          <TextInput
            placeholder="password"
            secureTextEntry
            onChangeText={(text) => {
              this.setState({ pass: text });
            }}
          />
          <TextInput
            placeholder="password"
            secureTextEntry
            onChangeText={(text) => {
              this.setState({ confPass: text });
            }}
          />
          <TouchableOpacity onPress={()=>{this.registerUser(user, pass, confPass)}}>
            <Text>Registrar</Text>
          </TouchableOpacity>
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
    backgroundColor: "#5653D4",
  },
  text: {
    color: "#ffff",
    fontSize: 30,
  },
});
