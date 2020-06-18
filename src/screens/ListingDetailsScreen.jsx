import React from "react";
import { View, Image, StyleSheet } from "react-native";

import AppText from "../components/AppText/AppText";
import Colors from "../config/color";
import ListItem from "../components/ListItems";
function ListingDetailsScreen({ list }) {
  return (
    <View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../asset/kid-jacket.png")}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>GreenDodge Kid Jacket for sale</AppText>
        <AppText style={styles.price}>$360</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../asset/person.png")}
            title="Iloba Israel"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 10,
    backgroundColor: Colors.background,
  },
  image: {
    width: "100%",
    height: 200,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    color: Colors.text,
  },
  price: {
    color: Colors.secondary,
    fontWeight: "600",
    fontSize: 20,
  },
  userContainer: {
    marginVertical: 20,
  },
});
