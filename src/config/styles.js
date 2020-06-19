import { Platform } from "react-native";

import Colors from "./color";

export default {
  Colors,
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: Colors.dark,
  },
  norPaddingOnAdnroid: {
    marginTop: Platform.OS === "android" ?? 0,
  },
};
