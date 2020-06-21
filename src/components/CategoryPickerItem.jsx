import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import AppIcon from "./AppIcon";
import { AppText } from "./AppText";
function CategoryPickerItem({ item, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <AppIcon
          backgroundColor={item.backgroundColor}
          name={item.icon}
          size={50}
        />
        <AppText style={styles.label}>{item.label}</AppText>
      </TouchableOpacity>
    </View>
  );
}

export default CategoryPickerItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
    width: "35%",
  },
  label: {
    fontSize: 15,
    marginTop: 5,
    textAlign: "center",
  },
});
