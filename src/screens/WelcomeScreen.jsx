import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../asset/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../asset/logo-red.png")} />
        <Text>Sell What You Dont't Need</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: { flex: 1, justifyContent: "flex-end", alignItems: "center" },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
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
});
