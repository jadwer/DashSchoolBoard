import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      pass: "",
      isLogged: false,
    };
  }

  signIn = (user, pass) => {
    user = user.trim().toLowerCase();
    console.log(`Se está intentando iniciar sesión con el usuario ${user} y la contraseña ${pass}`);

    const auth = getAuth();

    signInWithEmailAndPassword(auth, user, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        this.props.navigation.replace("DrawerMenu");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Pantalla de Inicio de Sesión</Text>
        <Image
          source={require("../assets/splash.png")}
          style={styles.imgContainer}></Image>
        <View>
          <TextInput
            placeholder="Usuario"
            autofocus
            onChangeText={(text) => {
              this.setState({ user: text });
            }}
          />
          <TextInput
            placeholder="Contraseña"
            secureTextEntry
            onChangeText={(text) => {
              this.setState({ pass: text });
            }}
          />

          <TouchableOpacity
            onPress={() => {
              this.signIn(this.state.user, this.state.pass);
            }}>
            <Text>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Registro");
            }}>
            <Text>¿No estás registrado? ¡Regístrate!</Text>
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
  imgContainer: {
    height: 250,
    width: 250,
  },
});
