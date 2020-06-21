import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import PickerItem from "./AppPickerItem";
import Screen from "../components/Screen";
import { AppText } from "../components/AppText";
import { defaultStyles, Colors } from "../config";
function AppPicker({
  icon,
  items,
  placeholder,
  selectedItem,
  onSelected,
  PickerItemComponent = PickerItem,
  width = "100%",
  numberOfComlumns = 1,
}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <Icon name={icon} size={30} color={defaultStyles.Colors.medium} />
          )}
          {selectedItem ? (
            <AppText style={styles.text}> {selectedItem.label} </AppText>
          ) : (
            <AppText style={styles.placeholder}> {placeholder} </AppText>
          )}
          {icon && (
            <Icon
              name="chevron-down"
              size={30}
              color={defaultStyles.Colors.medium}
              style={styles.icon}
            />
          )}
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
            <Icon
              name="close"
              size={25}
              style={styles.iconClose}
              color={Colors.medium}
            />
          </TouchableWithoutFeedback>
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            numColumns={numberOfComlumns}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelected(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

export default AppPicker;

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.Colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 5,
  },
  iconClose: {
    position: "absolute",
    right: 5,
    top: -20,
  },
  placeholder: {
    color: Colors.medium,
    flex: 1,
  },
  text: {
    flex: 1,
  },
});
