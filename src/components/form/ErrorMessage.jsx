import React from "react";
import { StyleSheet } from "react-native";

import { AppText } from "../../components/AppText";
import { defaultStyles } from "../../config";
function ErrorMessage({ error, visible, style }) {
  if (!visible || !error) return null;
  return <AppText style={[styles.error, style]}>{error}</AppText>;
}

export default ErrorMessage;

const styles = StyleSheet.create({
  error: {
    color: defaultStyles.Colors.danger,
  },
});
