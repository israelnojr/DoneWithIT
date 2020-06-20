import React from "react";
import {} from "react-native";
import { useFormikContext } from "formik";

import { AppButton } from "../button";
function AppSubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();
  return <AppButton title={title} onPress={handleSubmit} />;
}

export default AppSubmitButton;
