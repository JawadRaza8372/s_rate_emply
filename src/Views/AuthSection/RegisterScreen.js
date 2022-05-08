import { StyleSheet, Text, View } from "react-native";
import React, { useState, useRef } from "react";
import SafeAreaComp from "../../Components/CommonComponents/SafeAreaComp";
import Forms from "../../Components/AuthComponents/Forms/Forms";
import FormSubmitButton from "../../Components/AuthComponents/Forms/FormSubmitButton";
import InputFieldForms from "../../Components/AuthComponents/Forms/InputFieldForms";
import * as Yup from "yup";
import PasswordInputFieldForm from "../../Components/AuthComponents/Forms/PasswordInputFieldForm";
import CountryPicker from "react-native-country-picker-modal";
import PhoneInput from "react-native-phone-number-input";
import CustomAuthBtn from "../../Components/AuthComponents/CustomAuthBtn";
import { screenBg, secColor, stopColor } from "../../AppColors";
import ErrorMessage from "../../Components/AuthComponents/Forms/ErrorMessage";
import { w, h } from "react-native-responsiveness";
import PhoneNumberField from "../../Components/AuthComponents/PhoneNumberField";
import { MaterialIcons } from "@expo/vector-icons";
import { mainColor } from "../../AppColors";
import { ScrollView } from "react-native-gesture-handler";
import FormPhoneInput from "../../Components/AuthComponents/Forms/FormPhoneInput";
const RegisterScreen = () => {
  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required().label("First Name"),
    lastname: Yup.string().required().label("Last Name"),
    nickname: Yup.string().required().label("Nick Name"),
    email: Yup.string().required().email().label("Email"),
    phone: Yup.string().required().label("Phone Number"),
    password: Yup.string().required().min(4).label("Password"),
    repassword: Yup.string().required().min(4).label("Re-type Password"),
  });
  let onSubmitFun = (values) => {
    console.log(values);
  };
  const finalmsg =
    "Email and Nickname are unique and cannot be\nchanged. Your Nickname will appear to customers.";
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef();
  return (
    <SafeAreaComp>
      <View style={styles.registerScreen}>
        <View style={styles.headerContent}>
          <Text style={styles.maineading}>Register</Text>
        </View>
        <ScrollView contentContainerStyle={{ width: w("100%") }}>
          <Forms
            initialValues={{
              firstname: "",
              lastname: "",
              nickname: "",
              email: "",
              password: "",
              repassword: "",
            }}
            onSubmit={onSubmitFun}
            validationSchema={validationSchema}
          >
            <InputFieldForms
              title="First Name*"
              name="firstname"
              placeholder={"Enter Your Email"}
            />
            <View style={styles.seprator} />
            <InputFieldForms
              title="Last Name*"
              name="lastname"
              placeholder={"Enter Your Email"}
            />
            <View style={styles.seprator} />

            <InputFieldForms
              title="Nick Name*"
              name="nickname"
              placeholder={"Enter Your Email"}
            />
            <View style={styles.seprator} />

            <InputFieldForms
              title="Email*"
              name="email"
              placeholder={"Enter Your Email"}
            />
            <View style={styles.seprator} />

            <FormPhoneInput
              title="Email*"
              name="phone"
              placeholder={"Enter Your Email"}
            />

            {/* <PhoneNumberField /> */}

            <View style={styles.seprator} />

            <PasswordInputFieldForm
              title={"Password*"}
              name="password"
              placeholder={"Enter Your Password"}
            />
            <View style={styles.seprator} />

            <PasswordInputFieldForm
              title={"Retype Password*"}
              name="repassword"
              placeholder={"Enter Your Password"}
            />
            <View style={styles.seprator} />
            <Text style={styles.mandTxt}>*Mandatory fields</Text>
            <Text style={styles.mandtxtsub}>{finalmsg}</Text>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox}>
                <MaterialIcons name="done" size={h("2%")} color={mainColor} />
              </View>
              <Text style={styles.checkboxtxt}>
                I accept the <Text>Terms & Conditions</Text> of S•Rate
                application
              </Text>
            </View>
            <FormSubmitButton title={"Register"} />
            <View style={styles.seprator} />
          </Forms>
        </ScrollView>
      </View>
    </SafeAreaComp>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  registerScreen: {
    width: w("100%"),
    height: h("100%"),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
  },
  headerContent: {
    width: "100%",
    height: "13%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  phonetxt: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    width: w("88%"),
    alignSelf: "center",
  },
  seprator: {
    marginBottom: h("2%"),
  },
  maineading: {
    fontSize: h("4%"),
    fontWeight: "bold",
    textAlign: "center",
  },
  titletxt: {
    fontSize: h("1.7%"),
    textTransform: "capitalize",
  },
  mandTxt: {
    fontSize: h("1.9%"),
    width: w("88%"),
    alignSelf: "center",
    marginTop: h("2.5%"),
  },
  mandtxtsub: {
    fontSize: h("1.7%"),
    width: w("87%"),
    alignSelf: "center",
    marginVertical: h("2%"),
  },
  checkbox: {
    width: h("2.5%"),
    height: h("2.5%"),
    borderWidth: 1,
    borderColor: "#94A3BE",
    borderRadius: h("0.5%"),
    marginRight: 10,
  },
  checkboxContainer: {
    width: w("88%"),
    display: "flex",
    alignSelf: "center",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "row",
    overflow: "hidden",
    marginVertical: h("2%"),
  },
  checkboxtxt: {
    width: "80%",
    fontSize: h("1.9%"),
  },
});
