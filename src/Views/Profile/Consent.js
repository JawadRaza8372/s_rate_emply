import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  ImageBackground,
  Switch,
} from "react-native";
import React, { useState } from "react";
import { w, h } from "react-native-responsiveness";
import { LinearGradient } from "expo-linear-gradient";
import { mainColor, screenBg } from "../../AppColors";
import { Ionicons } from "@expo/vector-icons";
import SafeAreaComp from "../../Components/CommonComponents/SafeAreaComp";
import Header from "../../Components/CommonComponents/Header";

const Consent = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

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
        <View style={styles.button}>
          <Text style={isEnabled ? styles.AllowText : styles.AllowText2}>
            Allow
          </Text>
          <Switch
            trackColor={{ false: "#3D3D63", true: "#3D3D63" }}
            thumbColor={isEnabled ? "#CFD4E0" : "#DABE9C"}
            ios_backgroundColor="#3D3D63"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          <Text style={isEnabled ? styles.AllowText2 : styles.AllowText}>
            Do not allow
          </Text>
        </View>
      </View>
      {/* listing 1 */}

      {/* listing 1 */}
      <View style={styles.listingbox}>
        <Text style={styles.Subheader}>Listing</Text>
        <Text style={styles.Subheader2}>
          Customers can track you in the listing of the hotel’s employees
        </Text>

        <View style={styles.button}>
          <Text style={isEnabled ? styles.AllowText : styles.AllowText2}>
            Allow
          </Text>
          <Switch
            trackColor={{ false: "#3D3D63", true: "#3D3D63" }}
            thumbColor={isEnabled ? "#CFD4E0" : "#DABE9C"}
            ios_backgroundColor="#3D3D63"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          <Text style={isEnabled ? styles.AllowText2 : styles.AllowText}>
            Do not allow
          </Text>
        </View>
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
  button: {
    width: "100%",
    height: "30%",
    // backgroundColor: "gold",
    alignItems: "center",
    flexDirection: "row",
  },
  AllowText: {
    color: mainColor,
    fontSize: h("2.2%"),
    marginLeft: h("1%"),
    marginRight: h("1%"),
  },
  AllowText2: {
    color: mainColor,
    fontSize: h("2.2%"),
    fontWeight: "bold",
    marginLeft: h("1%"),
    marginRight: h("1%"),
  },
});

export default Consent;
