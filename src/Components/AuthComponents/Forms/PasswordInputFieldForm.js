import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomPaswdInput from "../CustomPaswdInput";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";
import { w, h } from "react-native-responsiveness";

const PasswordInputFieldForm = ({
  title,
  name,
  placeholder,
  ...otherProps
}) => {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <View style={styles.phonetxt}>
      <CustomPaswdInput
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

export default PasswordInputFieldForm;

const styles = StyleSheet.create({
  phonetxt: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    width: w("88%"),
    alignSelf: "center",
  },
});
