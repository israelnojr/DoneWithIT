import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import Colors from "../config/color";
function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <Icon name="ios-close" color={Colors.white} size={35} />
      </View>
      <View style={styles.deleteIcon}>
        <Icon name="ios-trash" color={Colors.white} size={35} />
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../asset/chair.jpg")}
      />
    </View>
  );
}

export default ViewImageScreen;

const styles = StyleSheet.create({
  closeIcon: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
    marginTop: 50,
  },
});
