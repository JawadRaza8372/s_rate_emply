import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFormikContext } from "formik";
import CustomAuthBtn from "../CustomAuthBtn";
import { secColor } from "../../../AppColors";

const FormSubmitButton = ({ title }) => {
  const { handleSubmit } = useFormikContext();

  return (
    <CustomAuthBtn title={title} bgColor={secColor} onClick={handleSubmit} />
  );
};

export default FormSubmitButton;

const styles = StyleSheet.create({});
