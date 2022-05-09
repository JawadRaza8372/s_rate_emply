import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { w, h } from "react-native-responsiveness";
import { LinearGradient } from "expo-linear-gradient";
import { mainColor, screenBg } from "../../AppColors";
import { Ionicons } from "@expo/vector-icons";
import SafeAreaComp from "../../Components/CommonComponents/SafeAreaComp";
import Header from "../../Components/CommonComponents/Header";

const PersonalInfo = ({ navigation }) => {
  const [Active, setActive] = useState(false);
  const [Edit, setEdit] = useState(false);

  return (
    <SafeAreaComp>
      <ScrollView style={{ width: "100%", height: h("70%") }}>
        <View style={styles.MainContainer}>
          <Header
            onPress={() => {
              navigation.goBack();
            }}
          />
          <Text style={styles.EarnCredit}> Personal & Work info</Text>

          {/* Top header  */}
          <View style={styles.BarLine}>
            <View style={styles.Toplinebar}>
              <TouchableOpacity
                onPress={() => {
                  setActive(true);
                }}
              >
                <Text style={Active ? styles.BarText : styles.BarText2}>
                  Personal info
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setActive(false);
                }}
              >
                <Text
                  style={Active === false ? styles.BarText : styles.BarText2}
                >
                  Work info
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.line} />
            {Active ? (
              <View style={styles.Circle} />
            ) : (
              <View style={styles.Circle2} />
            )}
          </View>
          {/* Top header  */}

          {/* Profile Screen 1 */}
          <TouchableOpacity
            onPress={() => {
              setEdit(!Edit);
            }}
            style={styles.leftHeader}
          >
            <View style={styles.RightContainer2}>
              <Image
                style={styles.ImgIcon}
                source={require("../../../assets/ig1.png")}
              />
            </View>
            <Text>Edit info</Text>
          </TouchableOpacity>

          {/* Profile */}
          <View style={styles.ImageContainer}>
            <Image
              style={{ width: "100%", height: "100%", resizeMode: "contain" }}
              source={require("../../../assets/profileImage.png")}
            />

            {Edit && (
              <TouchableOpacity style={styles.icon}>
                <Ionicons name={"trash"} size={h("3%")} color={mainColor} />
              </TouchableOpacity>
            )}
            {Edit && (
              <View style={styles.BGText}>
                <Text style={styles.ProfileText}>
                  Upload your profile picture for guests to identify you{" "}
                </Text>
              </View>
            )}
          </View>
          {/* Profile */}

          {/* Detail Foam */}
          {Edit === true ? (
            <View style={styles.DetailsFoam}>
              {/* Details 1 */}
              <Text style={styles.Name1}>First name*</Text>
              <TextInput placeholder="Denis" style={styles.TextInput} />
              {/* Details 1 */}
              {/* Details 1 */}
              <Text style={styles.Name1}>Last name*</Text>
              <TextInput placeholder="Denis" style={styles.TextInput} />
              {/* Details 1 */}
              {/* Details 1 */}
              <Text style={styles.Name1}>Nickname*</Text>
              <TextInput placeholder="Denis" style={styles.TextInput} />
              {/* Details 1 */}
              <Text style={styles.Name1}>Email*</Text>
              <Text style={styles.Name3}>joneskemail.com</Text>
              {/* Details 1 */}
              <Text style={styles.Name1}>Password*</Text>
              <TextInput placeholder="********" style={styles.TextInput} />
              {/* Details 1 */}
            </View>
          ) : (
            <View style={styles.DetailsFoam}>
              {/* Details 1 */}
              <Text style={styles.Name1}>First name*</Text>
              <Text style={styles.Name2}>Denis</Text>
              {/* Details 1 */}
              {/* Details 1 */}
              <Text style={styles.Name1}>Last name*</Text>
              <Text style={styles.Name2}>Jones</Text>
              {/* Details 1 */}
              {/* Details 1 */}
              <Text style={styles.Name1}>Nickname*</Text>
              <Text style={styles.Name2}>DJones</Text>
              {/* Details 1 */}
              {/* Details 1 */}
              <Text style={styles.Name1}>Email*</Text>
              <Text style={styles.Name3}>joneskemail.com</Text>
              {/* Details 1 */}

              {/* Details 1 */}
              <Text style={styles.Name1}>Password*</Text>
              <Text style={styles.Name2}>********</Text>
              {/* Details 1 */}
            </View>
          )}

          {/* Detail Foam */}
          {/* Detail Foam */}

          {/* Detail Foam */}

          {/* Profile Screen 1 */}
        </View>
      </ScrollView>
    </SafeAreaComp>
  );
};

export default PersonalInfo;

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
  BarLine: {
    // backgroundColor: "red",
    width: "100%",
    height: h("8%"),
  },
  Toplinebar: {
    flexDirection: "row",
    width: "100%",
    height: "90%",
    // backgroundColor: "gold",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
    paddingBottom: h("1%"),
  },
  BarText: {
    color: mainColor,
    fontSize: h("2%"),
    fontWeight: "bold",
  },
  BarText2: {
    color: mainColor,
    fontSize: h("2%"),
  },
  line: {
    backgroundColor: mainColor,
    width: "100%",
    height: h("0.2%"),
  },
  Circle: {
    backgroundColor: mainColor,
    width: 15,
    height: 15,
    borderRadius: h("100%"),
    position: "absolute",
    top: 50,
    left: 115,
  },
  Circle2: {
    backgroundColor: mainColor,
    width: 15,
    height: 15,
    borderRadius: h("100%"),
    position: "absolute",
    top: 50,
    left: 275,
  },
  ImageContainer: {
    width: 180,
    height: 180,
    borderRadius: 1000 / 2,
    borderColor: mainColor,
    borderWidth: h("0.5%"),
    marginLeft: h("1%"),
  },
  leftHeader: {
    // backgroundColor: "red",
    width: "40%",
    height: h("4%"),
    marginTop: h("1%"),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
  },
  ImgIcon: {
    width: "70%",
    height: "70%",
    resizeMode: "contain",
  },
  RightContainer2: {
    width: "20%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    position: "absolute",
    right: 0,
    top: 150,
  },
  BGText: {
    // backgroundColor: "red",
    width: "100%",
    position: "absolute",
    right: -190,
    top: 60,
  },
  ProfileText: {
    color: mainColor,
    fontSize: h("2%"),
  },
  DetailsFoam: {
    width: w("100%"),
    height: h("50%"),
    // backgroundColor: "red",
    paddingLeft: h("4%"),
    paddingTop: h("4%"),
  },
  Name1: {
    color: mainColor,
    fontSize: h("2.1%"),
    marginTop: h("2%"),
  },
  Name2: {
    color: mainColor,
    fontSize: h("2.8%"),
    fontWeight: "bold",
  },
  Name3: {
    color: "#8494B3",
    fontSize: h("2.8%"),
    fontWeight: "bold",
  },
  CountryContainer: {
    width: w("90%"),
    height: h("20%"),
  },
  MainContainer: {
    width: "100%",
    height: h("120%"),
  },
  TextInput: {
    width: "90%",
    height: h("6%"),
    borderColor: "#0003",
    borderBottomWidth: h("0.2%"),
    fontSize: h("2.2%"),
  },
});
