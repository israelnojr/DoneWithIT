import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import { AppButton } from "../components/button";
import { Colors } from "../config";
import routes from "../navigation/routes";
function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={1.5}
      style={styles.background}
      source={require("../asset/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../asset/logo-red.png")} />
        <Text style={styles.tagline}>... We Sell Em All ...</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title="Login"
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate(routes.REGISTER)}
        />
      </View>
    </ImageBackground>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: { flex: 1, justifyContent: "flex-end", alignItems: "center" },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  tagline: {
    fontSize: 23,
    fontWeight: "800",
    paddingVertical: 20,
    color: Colors.secondary,
  },
});
