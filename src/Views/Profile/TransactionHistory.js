import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import { w, h } from "react-native-responsiveness";
import { LinearGradient } from "expo-linear-gradient";
import { mainColor, screenBg } from "../../AppColors";
import { Ionicons } from "@expo/vector-icons";
import SafeAreaComp from "../../Components/CommonComponents/SafeAreaComp";
import Header from "../../Components/CommonComponents/Header";

const TransactionHistory = ({ navigation }) => {
  return (
    <SafeAreaComp>
      <Header
        onPress={() => {
          navigation.goBack();
        }}
      />

      <Text style={styles.EarnCredit}>Transaction History</Text>

      <View style={styles.MainRoundContainer}>
        <Text style={styles.creditScores}>Your Credits: 100</Text>
      </View>

      {/* box1 */}
      <View style={styles.HotelBox}>
        <Text style={styles.HotelText}>FILTERS</Text>
        <Ionicons name={"close-circle"} size={h("3%")} color={mainColor} />
      </View>
      {/* box1 */}
      {/* box1 */}
      <View style={styles.HotelBox2}>
        <Text style={styles.HotelText2}>Credits earned</Text>
        <Ionicons name={"close-circle"} size={h("3%")} color={mainColor} />
      </View>
      {/* box1 */}

      {/* Chip Screens */}
      <View style={styles.MainChipScreen}>
        <View style={styles.leftScreenChip}>
          <Image
            style={styles.img1}
            source={require("../../../assets/bgg1.png")}
          />
        </View>
        <View style={styles.rightScreenChip}>
          <Text style={styles.ScreenChipText}>Today, 13:00</Text>
          <Text style={styles.ScreenChipText}>
            You completed the target “Get 5 evaluations”
          </Text>
          <Text style={styles.ScreenChipText2}>+10 Credits</Text>
        </View>
      </View>
      {/* Chip Screens */}

      {/* Chip Screens */}
      <View style={styles.MainChipScreen}>
        <View style={styles.leftScreenChip}>
          <Image
            style={styles.img2}
            source={require("../../../assets/bgg2.png")}
          />
        </View>
        <View style={styles.rightScreenChip}>
          <Text style={styles.ScreenChipText}>Today, 13:00</Text>
          <Text style={styles.ScreenChipText}>
            You registered a new customer!
          </Text>
          <Text style={styles.ScreenChipText2}>+10 Credits</Text>
        </View>
      </View>
      {/* Chip Screens */}
      {/* Chip Screens */}
      <View style={styles.MainChipScreen}>
        <View style={styles.leftScreenChip}>
          <Image
            style={styles.img1}
            source={require("../../../assets/bgg3.png")}
          />
        </View>
        <View style={styles.rightScreenChip}>
          <Text style={styles.ScreenChipText}>Today, 13:00</Text>
          <Text style={styles.ScreenChipText}>
            You redeemed your credits to purchase the gift “Amazon Voucher”
          </Text>
          <Text style={styles.ScreenChipText2}>+10 Credits</Text>
        </View>
      </View>
      {/* Chip Screens */}
    </SafeAreaComp>
  );
};

const styles = StyleSheet.create({
  EarnCredit: {
    fontSize: h("3.5%"),
    alignSelf: "center",
    color: mainColor,
    fontWeight: "bold",
  },
  MainRoundContainer: {
    width: "90%",
    height: h("6%"),
    backgroundColor: "#0003",
    alignSelf: "center",
    borderRadius: h("100%"),
    marginTop: h("2%"),
    justifyContent: "center",
    alignItems: "center",
  },
  MainRoundContainer2: {
    width: "90%",
    height: h("5%"),
    backgroundColor: "#0003",
    alignSelf: "center",
    borderRadius: h("100%"),
    marginTop: h("2%"),
    justifyContent: "center",
    alignItems: "center",
  },
  creditScores: {
    color: mainColor,
    fontSize: h("2.6%"),
    fontWeight: "bold",
  },
  HotelBox: {
    backgroundColor: "#0003",
    width: "90%",
    height: h("5%"),
    alignSelf: "center",
    borderRadius: h("100%"),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: h("2%"),
    paddingRight: h("2%"),
    marginTop: h("1%"),
  },
  HotelBox2: {
    backgroundColor: "#0003",
    width: "60%",
    height: h("5%"),

    borderRadius: h("100%"),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: h("2%"),
    paddingRight: h("2%"),
    marginTop: h("1%"),
    marginLeft: h("2.5%"),
  },
  HotelText: {
    color: mainColor,
    fontSize: h("2%"),
    fontWeight: "bold",
  },
  HotelText2: {
    color: mainColor,
    fontSize: h("2%"),
  },
  MainChipScreen: {
    backgroundColor: "#0003",
    width: "100%",
    height: h("20%"),
    marginTop: h("1%"),
    flexDirection: "row",
  },
  leftScreenChip: {
    width: "40%",
    height: "100%",
    justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "red",
  },
  rightScreenChip: {
    width: "60%",
    height: "100%",
    // backgroundColor: "gold",
    justifyContent: "center",

    paddingRight: h("2%"),
  },
  ScreenChipText: {
    color: mainColor,
    fontSize: h("2.2%"),
    marginTop: h("1%"),
  },
  ScreenChipText2: {
    color: mainColor,
    fontSize: h("3%"),
    fontWeight: "bold",
    marginTop: h("1%"),
  },
  img1: {
    width: "90%",
    height: "90%",
    resizeMode: "contain",
    // backgroundColor: "red",
  },
  img2: {
    width: "70%",
    height: "70%",
    resizeMode: "contain",
    marginLeft: h("2%"),
    // backgroundColor: "red",
  },
});
export default TransactionHistory;
