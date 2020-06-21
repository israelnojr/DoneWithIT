import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Colors } from "../config";

function AppImageInput({ imageUri, onChangeImage }) {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!granted) {
      alert("Please give us permision to access your library");
    }
  };
  useEffect(() => {
    requestPermission();
  }, []);
  const handlePress = () => {
    if (!imageUri) seleteImage();
    else {
      Alert.alert("Delete", "Do you really want to delete this image ?", [
        { text: "Yes", onPress: () => onChangeImage(null) },
        { text: "No" },
      ]);
    }
  };
  const seleteImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) onChangeImage(result.uri);
    } catch (error) {
      console.log("Error reading image", error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && <Icon color={Colors.medium} name="camera" size={40} />}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

export default AppImageInput;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: Colors.light,
    borderRadius: 15,
    height: 80,
    justifyContent: "center",
    overflow: "hidden",
    width: 80,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
