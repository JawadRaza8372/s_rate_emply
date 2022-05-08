import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";
import CustomInput from "../CustomInput";
const InputFieldForms = ({ title, name, placeholder, ...otherProps }) => {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  console.log(errors);
  return (
    <View>
      <CustomInput
        title={title ? title : name}
        placeholder={placeholder}
        onChange={handleChange(name)}
        onBlur={() => {
          setFieldTouched(name);
        }}
        error={errors[name] ? true : false}
        {...otherProps}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </View>
  );
};

export default InputFieldForms;
