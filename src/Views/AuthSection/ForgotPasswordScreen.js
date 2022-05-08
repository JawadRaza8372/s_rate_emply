import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SafeAreaComp from "../../Components/CommonComponents/SafeAreaComp";
import Forms from "../../Components/AuthComponents/Forms/Forms";
import FormSubmitButton from "../../Components/AuthComponents/Forms/FormSubmitButton";
import InputFieldForms from "../../Components/AuthComponents/Forms/InputFieldForms";
import * as Yup from "yup";
import { w, h } from "react-native-responsiveness";
import { secColor, mainColor } from "../../AppColors";
const ForgotPasswordScreen = ({ navigation }) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
  });
  let onSubmitFun = (values) => {
    console.log(values);
    navigation.navigate("SuccessScreen");
  };
  return (
    <SafeAreaComp>
      <View style={styles.maindiv}>
        <Text style={styles.maintext}>Forgot password?</Text>
        <Text style={styles.subtext}>
          Please enter the email that is registered to the system, so we can
          send you the instructions.
        </Text>
        <View style={styles.forgotview}>
          <Forms
            initialValues={{ email: "" }}
            onSubmit={onSubmitFun}
            validationSchema={validationSchema}
          >
            <InputFieldForms name="email" placeholder={"Enter Your Email"} />

            <FormSubmitButton title={"Submit"} />
          </Forms>
        </View>

        <Text style={styles.backbtn}>Back to login</Text>
      </View>
    </SafeAreaComp>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  maindiv: {
    width: "100%",
    height: "100%",
    paddingTop: h("4%"),
  },
  maintext: {
    fontSize: h("4%"),
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: h("3%"),
  },
  subtext: {
    fontSize: h("2.3%"),
    width: "80%",
    alignSelf: "center",
    textAlign: "center",
    marginBottom: h("2%"),
  },
  forgotview: {
    width: "100%",
    height: h("35%"),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
  },
  backbtn: {
    fontSize: h("2.8%"),
    color: mainColor,
    fontWeight: "bold",
    textAlign: "center",
  },
});
