import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  text: {
    ...Platform.select({
      android: {
        fontSize: 18,
        fontFamily: "Roboto",
      },
      ios: {
        fontSize: 20,
        fontFamily: "Avenir",
      },
    }),
  },
});

export default styles;
