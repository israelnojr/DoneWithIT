import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import useAuth from "../auth/useAuth";
import AppIcon from "../components/AppIcon";
import Colors from "../config/color";
import Screen from "../components/Screen";
import ListItem from "../components/ListItems";
import ListItemSeparator from "../components/ListItemSeparator";
const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "apps",
      backgroundColor: Colors.primary,
    },
  },

  {
    title: "My Messages",
    icon: {
      name: "mail",
      backgroundColor: Colors.secondary,
    },
    targetScreen: "Messages",
  },
];
function AccountScreen({ navigation }) {
  const { user, logOut } = useAuth();
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={user.user.name}
          subTitle={user.user.email}
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
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<AppIcon name="power" backgroundColor={Colors.logout} />}
        onPress={() => logOut()}
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
