import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/ListItems";
import Colors from "../config/color";
import AppIcon from "../components/AppIcon";
import ListItemSeparator from "../components/ListItemSeparator";
const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "ios-more",
      backgroundColor: Colors.primary,
    },
  },

  {
    title: "My Messages",
    icon: {
      name: "ios-mail",
      backgroundColor: Colors.secondary,
    },
  },
];
function AccountScreen() {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Grey Hawk"
          subTitle="grey.hawk@gmail.com"
          image={require("../asset/grey.jpeg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItems) => menuItems.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              style={styles.listitem}
              title={item.title}
              IconComponent={
                <AppIcon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={
          <AppIcon name="ios-power" backgroundColor={Colors.logout} />
        }
      />
    </Screen>
  );
}

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: Colors.light,
  },
  listitem: {
    backgroundColor: Colors.white,
  },
});
