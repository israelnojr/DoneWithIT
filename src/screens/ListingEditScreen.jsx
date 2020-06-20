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
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  desc: Yup.string().required().min(20).max(1000).label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Camera", value: 3 },
];
function ListingEditScreen() {
  return (
    <Screen style={styles.screen}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          desc: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField maxLength={255} name="title" placeholder={"Title"} />
        <AppFormField
          keyboardType="numeric"
          maxLength={8} // maxlenght for price is 10000 which means .99 should be added making it eight
          name="price"
          placeholder={"Price"}
        />
        <AppFormPicker
          items={categories}
          name="category"
          placeholder="Choose Category"
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
