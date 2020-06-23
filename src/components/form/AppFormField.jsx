import React from "react";
import {} from "react-native";
import { useFormikContext } from "formik";
import { AppTextInput } from "../AppText";
import { ErrorMessage } from "./index";

function AppFormField({ name, width, ...otherProps }) {
  const {
    setFieldValue,
    values,
    errors,
    setFieldTouched,
    touched,
  } = useFormikContext();
  return (
    <>
      <AppTextInput
        width={width}
        {...otherProps}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        onBlur={() => setFieldTouched(name)}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  );
}

export default AppFormField;
