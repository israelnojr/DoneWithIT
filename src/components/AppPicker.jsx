import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import PickerItem from "../components/PickerItem";
import Screen from "../components/Screen";
import AppText from "../components/AppText/AppText";
import { defaultStyles, Colors } from "../config";
function AppPicker({ icon, items, placeholder, selectedItem, onSelected }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
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
          <Icon
            name="close"
            size={30}
            style={styles.iconClose}
            onPress={() => setModalVisible(false)}
          />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
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
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 5,
  },
  iconClose: {
    position: "absolute",
    right: 5,
  },
  placeholder: {
    color: Colors.medium,
    flex: 1,
  },
  text: {
    flex: 1,
  },
});
