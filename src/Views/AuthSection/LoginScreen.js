import {
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  ImageBackground,
  TouchableOpacity,
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

const LoginScreen = ({ navigation }) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
  });
  let onSubmitFun = (values) => {
    console.log("values", values);
    navigation.navigate("WelcomScren");
  };
  return (
    <SafeAreaComp>
      <View style={styles.header}>
        <ImageBackground
          source={require("../../../assets/TopProfile.png")}
          style={styles.imgshow}
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
            <TouchableOpacity
              style={styles.forgotBtn}
              onPress={() => navigation.navigate("ForgotPasswordScreen")}
            >
              <Text style={styles.forgottext}>Forgot Password?</Text>
            </TouchableOpacity>
            <FormSubmitButton title={"Login"} />
          </Forms>
        </View>
        <View style={styles.switchdiv}>
          <Text>Don’t have an account? </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("RegisterScreen");
            }}
          >
            <Text style={styles.regtext}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaComp>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  header: {
    width: w("100%"),
    height: h("30%"),

    overflow: "hidden",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  imgshow: {
    width: w("100%"),
    height: h("30%"),
  },
  headerimgcont: {
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
  forgottext: {
    color: mainColor,
    fontSize: h("2.2%"),
    fontWeight: "bold",
  },
  forgotBtn: {
    width: w("88%"),
    alignSelf: "center",
  },
});
