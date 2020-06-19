import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import Colors from "../config/color";
const listings = [
  {
    id: 1,
    title: "Red Jacket for sale",
    price: 100,
    image: require("../asset/red-jacket.png"),
  },
  {
    id: 2,
    title: "GreenDodge Kid Jacket for sale",
    price: 3500,
    image: require("../asset/kid-jacket.png"),
  },
  {
    id: 3,
    title: "Sofa Chairs for your living room",
    price: 10500,
    image: require("../asset/interior.jpg"),
  },
  {
    id: 4,
    title: "Beautiful Sofa Chairs for your living room",
    price: 1000,
    image: require("../asset/interior1.jpg"),
  },
  {
    id: 5,
    title: "Beautiful office chairs",
    price: 6500,
    image: require("../asset/chair.jpg"),
  },
];
function ListingScreen() {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

export default ListingScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 5,
    backgroundColor: Colors.light,
  },
});