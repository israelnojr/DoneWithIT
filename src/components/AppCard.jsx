import React from "react";
import { View, StyleSheet, Image } from "react-native";

import AppText from "./AppText/AppText";
import Colors from "../config/color";
function Card({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image resizeMode="contain" style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
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
