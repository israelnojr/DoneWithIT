import React, { useRef } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import AppImageInput from "./AppImageInput";

function AppImageInputList({ imageUris = [], onRemoveImage, onAddImage }) {
  const scrollView = useRef();
  return (
    <ScrollView
      ref={scrollView}
      horizontal={true}
      onContentSizeChange={() => scrollView.current.scrollToEnd()}
    >
      <View style={styles.container}>
        {imageUris.map((uri) => (
          <View style={styles.imageList} key={uri}>
            <AppImageInput
              onChangeImage
              imageUri={uri}
              onChangeImage={() => onRemoveImage(uri)}
            />
          </View>
        ))}
        <AppImageInput onChangeImage={(uri) => onAddImage(uri)} />
      </View>
    </ScrollView>
  );
}

export default AppImageInputList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  imageList: {
    marginRight: 10,
  },
});
