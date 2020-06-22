import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Colors } from "../config";

function NewListingButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Icon color={Colors.white} name="plus-circle" size={40} />
      </View>
    </TouchableOpacity>
  );
}

export default NewListingButton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: Colors.primary,
    bottom: 10,
    borderColor: Colors.white,
    borderRadius: 30,
    borderWidth: 5,
    height: 55,
    justifyContent: "center",
    width: 55,
  },
});
