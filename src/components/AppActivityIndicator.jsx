import React from "react";
import LottieView from "lottie-react-native";
import { View, StyleSheet } from "react-native";
import { Colors } from "../config";

function ActivityIndicator({ visible = false }) {
  if (!visible) return null;
  return (
    <View style={styles.overLay}>
      <LottieView
        autoPlay
        loop
        source={require("../asset/animations/loader")}
      />
    </View>
  );
}

export default ActivityIndicator;

const styles = StyleSheet.create({
  overLay: {
    height: "100%",
    width: "100%",
    opacity: 0.9,
    backgroundColor: Colors.white,
    position: "absolute",
    zIndex: 1,
  },
});
