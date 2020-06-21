import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { TouchableHighlight, Swipeable } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

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
            <AppText style={styles.title} numberOfLines={1}>
              {title}
            </AppText>
            {subTitle && (
              <AppText style={styles.subTitle} numberOfLines={1}>
                {subTitle}
              </AppText>
            )}
          </View>
          <Icon color={Colors.medium} name="chevron-right" size={25} />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

export default ListItems;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: Colors.white,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 35,
  },
  listContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  title: {
    color: Colors.text,
    fontWeight: "600",
    fontSize: 16,
  },
  subTitle: {
    color: Colors.medium,
    fontSize: 12,
  },
});
