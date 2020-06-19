import React, { useState } from "react";
import {} from "react-native";
import Screen from "./components/Screen";
import AppPicker from "./components/AppPicker";
import AppTextInput from "./components/AppTextInput";
function RootComponent() {
  const categories = [
    { label: "Funiture", value: 1 },
    { label: "Clothing", value: 2 },
    { label: "Cameras", value: 3 },
  ];

  const [category, setCategory] = useState(categories[0]);
  return (
    <Screen
      style={{
        padding: 10,
      }}
    >
      <AppPicker
        selectedItem={category}
        onSelected={(item) => setCategory(item)}
        items={categories}
        placeholder="Select a category"
        icon="apps"
        maxLength={30}
      />
      <AppTextInput
        placeholder="User Email"
        icon="email-outline"
        maxLength={30}
      />
    </Screen>
  );
}
export default RootComponent;
