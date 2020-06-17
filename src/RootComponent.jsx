import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

function RootComponent() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName=""></Drawer.Navigator>
    </NavigationContainer>
  );
}
export default RootComponent;
