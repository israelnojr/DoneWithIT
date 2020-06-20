import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { defaultStyles, Colors } from "../../config";
function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <Icon
          name={icon}
          size={30}
          color={defaultStyles.Colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={Colors.medium}
        style={defaultStyles.text}
        {...otherProps}
      />
    </View>
  );
}

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.Colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 5,
  },
});
