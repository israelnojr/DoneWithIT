import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppNavigator from "./navigation/AppNavigation";
import navigationTheme from "./navigation/navigationTheme";
import AuthNavigator from "./navigation/AuthNavigator";
function RootComponent() {
  return (
    <NavigationContainer theme={navigationTheme}>
      {/* <AppNavigator /> */}
      <AuthNavigator />
    </NavigationContainer>
  );
}
export default RootComponent;
