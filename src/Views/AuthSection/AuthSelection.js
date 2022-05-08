import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";
import SafeAreaComp from "../Components/SafeAreaComp";
import { w, h } from "react-native-responsiveness";
import { mainColor, screenBg, secColor } from "../AppColors";
import CustomAuthBtn from "../Components/CustomAuthBtn";
const AuthSelection = () => {
  return (
    <SafeAreaComp>
      <ScrollView>
        <View style={styles.optionView}>
          <Image
            source={require("../../assets/s_ratedlogo.png")}
            style={styles.imgshow}
          />
          <Text style={styles.desctext}>
            Join S-Rate, the only service rating app allowing guests to review
            each employee individually
          </Text>
          <CustomAuthBtn title={"Register"} bgColor={secColor} isShort={true} />
          <Text style={styles.desctext}>Already have an account?</Text>
          <CustomAuthBtn title={"Login"} bgColor={secColor} isShort={true} />
        </View>
        <View style={styles.imgdiv}>
          <Image
            source={require("../../assets/s-rate_home_top.png")}
            style={styles.imgshowsec}
          />
        </View>
      </ScrollView>
    </SafeAreaComp>
  );
};

export default AuthSelection;

const styles = StyleSheet.create({
  optionView: {
    width: w("100%"),
    height: h("80%"),
    backgroundColor: mainColor,
    borderBottomLeftRadius: w("35%"),
    borderBottomRightRadius: w("35%"),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
    paddingBottom: h("3%"),
  },
  desctext: {
    fontSize: h("2.5%"),
    color: screenBg,
    textAlign: "center",
    width: "85%",
  },
  imgshow: {
    width: w("70%"),
    height: w("35%"),
    resizeMode: "contain",
  },
  imgdiv: {
    width: w("100%"),
    height: h("48%"),
    position: "relative",
  },
  imgshowsec: {
    width: h("50%"),
    height: h("60%"),
    resizeMode: "contain",
    position: "absolute",
    top: -h("6%"),
    alignSelf: "center",
  },
});
