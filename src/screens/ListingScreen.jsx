import React, { useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import routes from "../navigation/routes";
import Screen from "../components/Screen";
import Card from "../components/AppCard";
import Colors from "../config/color";
import listingApi from "../api/listings";
import AppText from "../components/AppText/AppText";
import AppButton from "../components/button/AppButton";
import AppActivityIndicator from "../components/AppActivityIndicator";
import useApi from "../hooks/useApi";

function ListingScreen({ navigation }) {
  const { data: listings, error, loading, request: loadListings } = useApi(
    listingApi.getListings
  );
  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <View style={styles.retry}>
            <AppText>Couldn't retrieve listings.</AppText>
            <AppButton title="Retry" onPress={loadListings} />
          </View>
        </>
      )}

      {loading && (
        <>
          <View style={styles.retry}>
            <AppActivityIndicator autoplay={true} loop={true} visible={true} />
          </View>
        </>
      )}
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
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
  retry: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
});
