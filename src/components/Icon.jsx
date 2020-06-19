import React from "react";
import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

function AppIcon({
  name,
  size = 30,
  backgroundColor = "#222",
  iconColor = "#fff",
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Icon name={name} color={iconColor} size={size * 0.5} />
    </View>
  );
}

export default AppIcon;
const styles = StyleSheet.create({});
