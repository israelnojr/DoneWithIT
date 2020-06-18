import * as React from "react";
import { View } from "react-native";
import WelcomeScreen from "./screens/WelcomeScreen";
import ViewImageScreen from "./screens/ViewImageScreen";
import Card from "./components/Card";
import ListingDetailsScreen from "./screens/ListingDetailsScreen";

function RootComponent() {
  return (
    // <View
    //   style={{
    //     marginTop: 25,
    //   }}
    // >
    //   <Card
    //     title="Here is title"
    //     subTitle="$659"
    //     image={require("./asset/red-jacket.png")}
    //   />

    //   <Card
    //     title="Here is title"
    //     subTitle="$659"
    //     image={require("./asset/kid-jacket.png")}
    //   />
    // </View>

    <ViewImageScreen />
  );
}
export default RootComponent;
