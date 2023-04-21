import React, { useState } from "react";
import axios from "axios";
import {
  Alert,
  View,
  TextInput,
  Button,
  ImageBackground,
  StyleSheet,
} from "react-native";

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    backgroundColor: "red",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    width: "90%",
    minHeight: "40%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    margin: 10,
    width: '80%',
    backgroundColor: 'white',
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 50,
    backgroundColor: "#87CEEB",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    axios({
      method: "post",
      url: "https://pet-tracker-backend-production.up.railway.app/api/v1/auth/signin",
      data: {
        username,
        password,
      },
    })
      .then(function (response) {
        let token = response.headers.get("auth-token");

        Alert.alert(
          `Login Exitoso! ${response.data.user.username} - ${response.data.user.email}`
        );

        Alert.alert(token);
      })
      .catch(function (error) {
        Alert.alert(error.response.data[0].message);
      });
  };

  return (
    <ImageBackground
      source={require("../assets/register_fondo.jpeg")}
      style={styles.image}
    >
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Ingrese su usuario"
          defaultValue={username}
          onChangeText={(newText) => setUsername(newText)}
        />
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder="Ingrese su contraseña"
          onChangeText={(newText) => setPassword(newText)}
          defaultValue={password}
        />

        <Button
          title="Login"
          onPress={() => handleSubmit()}
          style={styles.button}
        />
      </View>
    </ImageBackground>
  );
};

export default Login;
