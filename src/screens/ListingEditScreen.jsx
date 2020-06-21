import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import { defaultStyles } from "../config";
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  AppSubmitButton,
} from "../components/form";

import CategoryPickerItem from "../components/CategoryPickerItem";
import Screen from "../components/Screen";
import { AppFormImagePicker } from "../components/form";
import useLocation from "../hooks/useLocation";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  desc: Yup.string().required().min(20).max(1000).label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image"),
});

const categories = [
  { label: "Furniture", value: 1, backgroundColor: "green", icon: "seat" },
  { label: "Fashion", value: 2, backgroundColor: "yellow", icon: "wc" },
  { label: "Gadget", value: 3, backgroundColor: "dodgerblue", icon: "camera" },
  { label: "Houses", value: 4, backgroundColor: "purple", icon: "home" },
  { label: "Clothing", value: 5, backgroundColor: "black", icon: "atm" },
  { label: "Camera & Bags", value: 6, backgroundColor: "pink", icon: "ballot" },
  { label: "Ticketing", value: 1, backgroundColor: "grey", icon: "airplane" },
];
function ListingEditScreen() {
  const location = useLocation();
  return (
    <Screen style={styles.screen}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          desc: "",
          category: null,
          images: [],
        }}
        onSubmit={(values) => console.log(values, location)}
        validationSchema={validationSchema}
      >
        <AppFormImagePicker name="images" />
        <AppFormField maxLength={255} name="title" placeholder={"Title"} />
        <AppFormField
          keyboardType="numeric"
          maxLength={8} // maxlenght for price is 10000 which means .99 should be added making it eight
          name="price"
          placeholder={"Price"}
          width={120}
        />
        <AppFormPicker
          items={categories}
          numberOfComlumns={3}
          PickerItemComponent={CategoryPickerItem}
          name="category"
          placeholder="Choose Category"
          width="70%"
        />
        <AppFormField
          maxLength={500}
          multiline={true}
          name="desc"
          numberOfLines={3}
          placeholder="Description"
        />
        <AppSubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

export default ListingEditScreen;

const styles = StyleSheet.create({
  screen: { padding: 10, backgroundColor: defaultStyles.Colors.background },
});
