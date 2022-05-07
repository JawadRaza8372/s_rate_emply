import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SafeAreaComp from "../Components/SafeAreaComp";
import Forms from "../Components/Forms/Forms";
import FormSubmitButton from "../Components/Forms/FormSubmitButton";
import InputFieldForms from "../Components/Forms/InputFieldForms";
import * as Yup from "yup";
import PasswordInputFieldForm from "../Components/Forms/PasswordInputFieldForm";

const RegisterScreen = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
  });
  let onSubmitFun = (values) => {
    console.log(values);
  };
  return (
    <SafeAreaComp>
      <View style={styles.registerScreen}>
        <Forms
          initialValues={{ email: "", password: "" }}
          onSubmit={onSubmitFun}
          validationSchema={validationSchema}
        >
          <InputFieldForms name="email" placeholder={"Enter Your Email"} />
          <PasswordInputFieldForm
            name="password"
            placeholder={"Enter Your Password"}
          />

          <FormSubmitButton title={"Register"} />
        </Forms>
      </View>
    </SafeAreaComp>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  registerScreen: {
    width: "100%",
    height: "100%",
  },
});
