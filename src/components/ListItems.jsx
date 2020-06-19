import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { TouchableHighlight, Swipeable } from "react-native-gesture-handler";

import AppText from "./AppText/AppText";
import Colors from "../config/color";
function ListItems({
  image,
  title,
  subTitle,
  onPress,
  IconComponent,
  renderRightActions,
  style,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={Colors.light} onPress={onPress}>
        <View style={[styles.container, style]}>
          {IconComponent}
          {image && <Image source={image} style={styles.image} />}
          <View style={styles.listContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
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
    backgroundColor: Colors.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  listContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  title: {
    color: Colors.text,
    fontWeight: "400",
  },
  subTitle: {
    color: Colors.medium,
  },
});
