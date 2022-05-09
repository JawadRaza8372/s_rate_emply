import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
import { LinearGradient } from "expo-linear-gradient";
import { mainColor, screenBg } from "../../AppColors";
import { Ionicons } from "@expo/vector-icons";
import SafeAreaComp from "../../Components/CommonComponents/SafeAreaComp";
import Header from "../../Components/CommonComponents/Header";

const CreditScreen = ({ navigation }) => {
  return (
    <SafeAreaComp>
      <Header
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Text style={styles.EarnCredit}>How to Earn Credits</Text>
      <Text style={[styles.EarnSubCredit, { marginTop: h("2.2%") }]}>
        Perform actions and earn Credits
      </Text>
      <Text style={styles.EarnSubCredit}>to purchase rewards!</Text>

      {/* ImageStrip */}
      <View style={styles.StripBox}>
        <View style={styles.leftBox}>
          <Image
            style={styles.image}
            source={require("../../../assets/pic1.png")}
          />
        </View>
        <View style={styles.RightBox}>
          <Text style={styles.RecievText}>Receive evaluations</Text>
          <Text style={styles.RecievText2}>+10 Credits</Text>
        </View>
      </View>
      {/* ImageStrip */}
      {/* ImageStrip */}
      <View style={styles.StripBox}>
        <View style={styles.leftBox}>
          <Image
            style={styles.image}
            source={require("../../../assets/pic3.png")}
          />
        </View>
        <View style={styles.RightBox}>
          <Text style={styles.RecievText}>Complete Targets</Text>
          <Text style={styles.RecievText2}>Up to +100 Credits</Text>
        </View>
      </View>
      {/* ImageStrip */}
      {/* ImageStrip */}
      <View style={styles.StripBox}>
        <View style={styles.leftBox}>
          <Image
            style={styles.image}
            source={require("../../../assets/pic5.png")}
          />
        </View>
        <View style={styles.RightBox}>
          <Text style={styles.RecievText}>Register new Customers</Text>
          <Text style={styles.RecievText2}>+10 Credits</Text>
        </View>
      </View>
      {/* ImageStrip */}
    </SafeAreaComp>
  );
};

export default CreditScreen;

const styles = StyleSheet.create({
  EarnCredit: {
    fontSize: h("3.5%"),
    alignSelf: "center",
    color: mainColor,
    fontWeight: "bold",
  },
  EarnSubCredit: {
    fontSize: h("2%"),
    alignSelf: "center",
    color: mainColor,
    paddingLeft: h("2%"),
    paddingRight: h("2%"),
  },
  StripBox: {
    // backgroundColor: "red",
    width: "100%",
    height: h("25%"),
    flexDirection: "row",
  },
  leftBox: {
    // backgroundColor: "gold",
    width: "45%",
    height: "100%",
    paddingLeft: h("1%"),
  },
  RightBox: {
    // backgroundColor: "green",
    width: "65%",
    height: "100%",
    justifyContent: "center",
    paddingLeft: h("2%"),
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  RecievText: {
    color: mainColor,
    fontSize: h("2.1%"),
  },
  RecievText2: {
    color: mainColor,
    fontSize: h("2.5%"),
    fontWeight: "bold",
  },
});
