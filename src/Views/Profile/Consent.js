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

const Consent = ({ navigation }) => {
  return (
    <SafeAreaComp>
      <Header
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Text style={styles.EarnCredit}>Consents</Text>
      <Text
        style={[
          styles.SubText,
          {
            marginTop: h("2%"),
          },
        ]}
      >
        Select the ways to allow customers to
      </Text>
      <Text style={styles.SubText}>identify you for evaluation:</Text>

      {/* listing 1 */}
      <View style={styles.listingbox}>
        <Text style={styles.Subheader}>Card scan</Text>
        <Text style={styles.Subheader2}>
          Cards are provided by the hotel manager or can be purchased by you and
          customers are allowed to scan the card to identify you
        </Text>
      </View>
      {/* listing 1 */}

      {/* listing 1 */}
      <View style={styles.listingbox}>
        <Text style={styles.Subheader}>Listing</Text>
        <Text style={styles.Subheader2}>
          Customers can track you in the listing of the hotel’s employees
        </Text>
      </View>
      {/* listing 1 */}
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
  SubText: {
    fontSize: h("2%"),
    alignSelf: "center",
    color: mainColor,
  },
  listingbox: {
    // backgroundColor: "red",
    width: "100%",
    height: h("20%"),
    paddingLeft: h("2%"),
    paddingTop: h("1%"),
    marginTop: h("5%"),
    paddingRight: h("7%"),
  },
  Subheader: {
    color: mainColor,
    fontSize: h("3%"),
    fontWeight: "bold",
  },
  Subheader2: {
    color: mainColor,
    fontSize: h("2%"),
    marginTop: h("1%"),
  },
});

export default Consent;
