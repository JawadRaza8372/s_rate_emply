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
  const [Active, setActive] = useState(true);
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

          {Active === true ? (
            <>
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
                  style={{
                    width: "100%",
                    height: "100%",
                    resizeMode: "contain",
                  }}
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
              {/* Profile Screen 1 */}
            </>
          ) : (
            <View style={styles.ComapnyBox}>
              <Text style={styles.CompanyText}>Company</Text>
              {/* box1 */}
              <View style={styles.HotelBox}>
                <Text style={styles.HotelText}>
                  Tropical Hotel Thessaloniki
                </Text>
                <Ionicons
                  name={"close-circle"}
                  size={h("3%")}
                  color={mainColor}
                />
              </View>
              {/* box1 */}

              <Text style={[styles.CompanyText, { marginTop: h("2%") }]}>
                Positions
              </Text>

              {/* box2 */}
              <View style={styles.HotelBox2}>
                <View style={styles.leftbox}>
                  <Text style={styles.HeaderText}>Positions:</Text>
                  <Text style={styles.SubHeaderText}>waiter</Text>
                  <Text style={[styles.HeaderText, { marginTop: h("3%") }]}>
                    Departments:
                  </Text>
                  <Text style={styles.SubHeaderText}>Tropical Restaurant</Text>
                  <Text style={styles.SubHeaderText}>Dinner Restaurant</Text>
                  <Text style={styles.SubHeaderText}>Entrance Cafe</Text>
                </View>
                <View style={styles.Rightbox}>
                  <Ionicons
                    name={"close-circle"}
                    size={h("3%")}
                    color={mainColor}
                  />
                </View>
              </View>

              {/* box2 */}
              {/* box2 */}
              <View style={[styles.HotelBox3, { marginTop: h("2%") }]}>
                <View style={styles.leftbox}>
                  <Text style={styles.HeaderText}>Positions:</Text>
                  <Text style={styles.SubHeaderText}>Barista</Text>
                  <Text style={[styles.HeaderText, { marginTop: h("2%") }]}>
                    Departments:
                  </Text>
                  <Text style={styles.SubHeaderText}>Dinner Restaurant</Text>
                </View>
                <View style={styles.Rightbox}>
                  <Ionicons
                    name={"close-circle"}
                    size={h("3%")}
                    color={mainColor}
                  />
                </View>
              </View>

              {/* box2 */}
            </View>
          )}
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
  ComapnyBox: {
    // backgroundColor: "red",
    width: "90%",
    height: h("80%"),
    alignSelf: "center",
    paddingTop: h("2%"),
  },
  CompanyText: {
    color: mainColor,
    fontSize: h("3%"),
    fontWeight: "bold",
  },
  HotelBox: {
    backgroundColor: "#0003",
    width: "105%",
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
    width: "105%",
    height: h("30%"),
    alignSelf: "center",
    borderRadius: h("2%"),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    marginTop: h("1%"),
    overflow: "hidden",
  },
  HotelBox3: {
    backgroundColor: "#0003",
    width: "105%",
    height: h("20%"),
    alignSelf: "center",
    borderRadius: h("2%"),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    marginTop: h("1%"),
    overflow: "hidden",
  },
  HotelText: {
    color: mainColor,
    fontSize: h("2%"),
    fontWeight: "bold",
  },
  leftbox: {
    // backgroundColor: "red",
    width: "80%",
    height: "100%",
    paddingLeft: h("2%"),
    paddingTop: h("2%"),
  },
  Rightbox: {
    // backgroundColor: "green",
    width: "20%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  HeaderText: {
    color: mainColor,
    fontSize: h("2%"),
  },
  SubHeaderText: {
    color: "#202442",
    fontSize: h("3%"),
    fontWeight: "bold",
  },
});
