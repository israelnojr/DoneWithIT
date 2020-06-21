import React from "react";
import { useFormikContext } from "formik";

import AppPicker from "../AppPicker";
import { ErrorMessage } from ".";

function AppFormPicker({
  items,
  name,
  placeholder,
  numberOfComlumns,
  PickerItemComponent,
  width,
  icon,
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        numberOfComlumns={numberOfComlumns}
        PickerItemComponent={PickerItemComponent}
        items={items}
        onSelected={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
        icon={icon}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
