import {
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";
import SafeAreaComp from "../../Components/CommonComponents/SafeAreaComp";
import { w, h } from "react-native-responsiveness";
import { mainColor } from "../../AppColors";
import Forms from "../../Components/AuthComponents/Forms/Forms";
import FormSubmitButton from "../../Components/AuthComponents/Forms/FormSubmitButton";
import InputFieldForms from "../../Components/AuthComponents/Forms/InputFieldForms";
import * as Yup from "yup";
import PasswordInputFieldForm from "../../Components/AuthComponents/Forms/PasswordInputFieldForm";

const LoginScreen = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
  });
  let onSubmitFun = (values) => {
    console.log(values);
  };
  return (
    <SafeAreaComp>
      <View style={styles.header}>
        <ImageBackground
          source={require("../../../assets/Background.png")}
          style={styles.imgshow}
          resizeMode="cover"
        >
          <View style={styles.headerimgcont}>
            <Image
              source={require("../../../assets/s_ratedlogo.png")}
              style={styles.mImgshow}
            />
          </View>
        </ImageBackground>
      </View>
      <View style={styles.content}>
        <View style={styles.loginForm}>
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

            <FormSubmitButton title={"Login"} />
          </Forms>
        </View>
        <View style={styles.switchdiv}>
          <Text>Don’t have an account? </Text>
          <Text style={styles.regtext}>Register</Text>
        </View>
      </View>
    </SafeAreaComp>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  header: {
    width: w("120%"),
    height: h("30%"),
    backgroundColor: mainColor,
    borderBottomLeftRadius: w("80%"),
    borderBottomRightRadius: w("80%"),
    overflow: "hidden",
    alignSelf: "center",
  },
  imgshow: {
    width: w("150%"),
    height: h("30%"),
    resizeMode: "cover",
    position: "relative",
  },
  headerimgcont: {
    position: "absolute",
    left: w("10%"),
    right: w("10%"),
    width: w("100%"),
    height: h("30%"),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  content: {
    width: w("100%"),
    height: h("70%"),
  },
  mImgshow: {
    width: w("70%"),
    height: w("30%"),
    resizeMode: "contain",
  },
  loginForm: {
    width: "100%",
    height: "70%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
  },
  switchdiv: {
    width: "100%",
    height: "30%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  regtext: {
    fontSize: h("3%"),
    fontWeight: "bold",
    marginTop: h("1%"),
    color: mainColor,
  },
});
