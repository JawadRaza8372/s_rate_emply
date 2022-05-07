import { StyleSheet, Text, View } from "react-native";
import React, { useState, useRef } from "react";
import SafeAreaComp from "../Components/SafeAreaComp";
import Forms from "../Components/Forms/Forms";
import FormSubmitButton from "../Components/Forms/FormSubmitButton";
import InputFieldForms from "../Components/Forms/InputFieldForms";
import * as Yup from "yup";
import PasswordInputFieldForm from "../Components/Forms/PasswordInputFieldForm";
import CountryPicker from "react-native-country-picker-modal";
import PhoneInput from "react-native-phone-number-input";
import CustomAuthBtn from "../Components/CustomAuthBtn";
import { screenBg, secColor, stopColor } from "../AppColors";
import ErrorMessage from "../Components/Forms/ErrorMessage";
import { w, h } from "react-native-responsiveness";
import PhoneNumberField from "../Components/PhoneNumberField";
import { ScrollView } from "react-native-gesture-handler";
const RegisterScreen = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
  });
  let onSubmitFun = (values) => {
    console.log(values);
  };
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
        <ScrollView contentContainerStyle={{ backgroundColor: "red" }}>
          <Forms
            initialValues={{ email: "", password: "" }}
            onSubmit={onSubmitFun}
            validationSchema={validationSchema}
          >
            <InputFieldForms name="email" placeholder={"Enter Your Email"} />
            <View style={styles.seprator} />
            <InputFieldForms name="email" placeholder={"Enter Your Email"} />
            <View style={styles.seprator} />

            <InputFieldForms name="email" placeholder={"Enter Your Email"} />
            <View style={styles.seprator} />

            <InputFieldForms name="email" placeholder={"Enter Your Email"} />
            <View style={styles.seprator} />

            <PhoneNumberField />
            <View style={styles.phonetxt}>
              <PhoneInput
                ref={phoneInput}
                defaultValue={value}
                defaultCode="DM"
                layout="first"
                onChangeText={(text) => {
                  setValue(text);
                }}
                onChangeFormattedText={(text) => {
                  setFormattedValue(text);
                }}
                // withDarkTheme
                withShadow={false}
                containerStyle={{
                  backgroundColor: screenBg,
                  borderBottomColor: valid ? "#202442" : stopColor,
                  borderBottomWidth: 1,
                }}
                textContainerStyle={{
                  backgroundColor: screenBg,
                }}
              />
              <ErrorMessage
                error={"Please Enter Valid Number"}
                visible={valid ? false : true}
              />
            </View>

            <CustomAuthBtn
              bgColor={secColor}
              title="country"
              onClick={() => {
                const checkValid = phoneInput.current?.isValidNumber(value);
                setShowMessage(true);
                setValid(checkValid ? checkValid : false);
              }}
            />
            {/* <CountryPicker
            {...{
              withFilter: true,
              withFlag: false,
              withCountryNameButton: true,
              withAlphaFilter: true,
              withCallingCode: true,
              withEmoji: false,
              withModal: true,
              countryCode: "AD",
              onSelect: (Country) => {
                console.log("country", Country.callingCode[0]);
              },
            }}
            visible
          /> */}
            <PasswordInputFieldForm
              name="password"
              placeholder={"Enter Your Password"}
            />
            <View style={styles.seprator} />

            <PasswordInputFieldForm
              name="password"
              placeholder={"Enter Your Password"}
            />
            <View style={styles.seprator} />

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
    backgroundColor: "blue",
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "space-evenly",
    // flexDirection: "column",
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
    alignItems: "center",
    justifyContent: "center",
    width: w("88%"),
    backgroundColor: "red",
    alignSelf: "center",
  },
  seprator: {
    marginBottom: h("1.8%"),
  },
  maineading: {
    fontSize: h("4%"),
    fontWeight: "bold",
    textAlign: "center",
  },
});
