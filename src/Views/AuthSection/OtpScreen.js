import { StyleSheet, Text, View } from "react-native";
import React, { useRef, useState } from "react";
import OTPTextInput from "react-native-otp-textinput";
import SafeAreaComp from "../../Components/CommonComponents/SafeAreaComp";
import CustomAuthBtn from "../../Components/AuthComponents/CustomAuthBtn";
import { mainColor, secColor } from "../../AppColors";
import { w, h } from "react-native-responsiveness";
import ErrorMessage from "../../Components/AuthComponents/Forms/ErrorMessage";
const OtpScreen = ({ navigation }) => {
  let otpInput = useRef(null);
  const [otptext, setotptext] = useState("");
  const onSubmitFun = () => {
    navigation.navigate("RegistrationSuccess");
  };
  return (
    <SafeAreaComp>
      <View style={styles.otpsection}>
        <Text style={styles.maintext}>Almost there!</Text>
        <Text style={styles.subtext}>
          Enter the PIN number that we sent to the email you entered
        </Text>
        <View style={styles.otpview}>
          <OTPTextInput
            ref={(e) => (otpInput = e)}
            handleTextChange={(text) => setotptext(text)}
            tintColor={"#94A3BE"}
            offTintColor={"#94A3BE"}
            inputCount={5}
            textInputStyle={{ color: "red" }}
          />
          <ErrorMessage error={"Wrong Pin"} visible={true} />
        </View>
        <CustomAuthBtn
          bgColor={secColor}
          title={"Submit"}
          onClick={onSubmitFun}
        />
        <View style={styles.resend}>
          <Text style={styles.firstsubtext}>Didn’t you receive the PIN?</Text>
          <Text style={styles.secmaintext}>Resend PIN</Text>
        </View>
        <Text style={{ ...styles.subtext, fontWeight: "bold" }}>
          PIN was resent to your email address. Please check!
        </Text>
        {/* <Button title="clear" onClick={clearText} /> */}
      </View>
    </SafeAreaComp>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  otpsection: {
    width: "100%",
    height: "100%",
    paddingTop: h("5%"),
  },
  maintext: {
    fontSize: h("4%"),
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: h("3%"),
  },
  subtext: {
    fontSize: h("2%"),
    width: "70%",
    alignSelf: "center",
    textAlign: "center",
    marginBottom: h("2%"),
    color: "#202442",
  },
  resend: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginVertical: h("5%"),
  },
  firstsubtext: {
    fontSize: h("1.8%"),
    width: "70%",
    alignSelf: "center",
    textAlign: "center",
  },
  secmaintext: {
    fontSize: h("2.5%"),
    fontWeight: "bold",
    color: mainColor,
    marginTop: h("1%"),
  },
  otpview: {
    width: "80%",
    marginVertical: h("6%"),
    alignSelf: "center",
  },
});
