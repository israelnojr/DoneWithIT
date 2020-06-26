import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Image } from "react-native-expo-image-cache";

import AppText from "./AppText/AppText";
import Colors from "../config/color";
function Card({ title, subTitle, image, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image resizeMode="contain" style={styles.image} uri={imageUrl} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.background,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    // marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  image: {
    width: "100%",
    height: 200,
    backgroundColor: "rgba(119,131,143,.1)",
  },
  subTitle: {
    color: Colors.secondary,
    fontWeight: "bold",
  },
  title: {
    // marginBottom: 7,
  },
});
