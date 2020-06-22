import { DefaultTheme } from "@react-navigation/native";
import { Colors } from "../config";

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.Colors,
    primary: Colors.primary,
    background: Colors.white,
  },
};
