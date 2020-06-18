import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import Colors from "../config/color";
// import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function ListItemDeleteActions({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Icon name="ios-trash" color={Colors.white} size={35} />
      </View>
    </TouchableWithoutFeedback>
  );
}

export default ListItemDeleteActions;
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.danger,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});
