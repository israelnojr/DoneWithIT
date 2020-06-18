import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { TouchableHighlight, Swipeable } from "react-native-gesture-handler";

import AppText from "./AppText/AppText";
import Colors from "../config/color";
function ListItems({ image, title, subTitle, onPress, renderRightActions }) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={Colors.light} onPress={onPress}>
        <View style={styles.container}>
          <Image source={image} style={styles.image} />
          <View style={styles.listContainer}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

export default ListItems;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  listContainer: {
    // marginTop: 10,
  },
  title: {
    color: Colors.text,
    fontWeight: "700",
  },
  subTitle: {
    color: Colors.medium,
  },
});
