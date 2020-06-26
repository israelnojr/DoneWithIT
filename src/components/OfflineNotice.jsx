import React from "react";
import { View, StyleSheet } from "react-native";
import { useNetInfo } from "@react-native-community/netinfo";
import { AppText } from "./AppText";
import { Colors } from "../config";
import Screen from "./Screen";

function OfflineNotice(props) {
  const netInfo = useNetInfo();
  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return (
      <Screen style={styles.screen}>
        <View style={styles.container}>
          <AppText style={styles.text}>No Internet Connection</AppText>
        </View>
      </Screen>
    );
  return null;
}

export default OfflineNotice;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    height: 50,
    position: "absolute",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  text: {
    color: Colors.white,
  },
  screen: {
    backgroundColor: Colors.light,
  },
});
