import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppNavigator from "./navigation/AppNavigation";
import navigationTheme from "./navigation/navigationTheme";
function RootComponent() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
export default RootComponent;
