import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
import { LinearGradient } from "expo-linear-gradient";
import { mainColor, screenBg } from "../../AppColors";
import { Ionicons } from "@expo/vector-icons";
import SafeAreaComp from "../../Components/CommonComponents/SafeAreaComp";

const Profile = ({ navigation }) => {
  return (
    <SafeAreaComp>
      <View style={styles.MainContainer}>
        <View style={styles.TopHeader}>
          <Image
            style={{ width: "100%", height: "80%", resizeMode: "cover" }}
            source={require("../../../assets/TopProfile.png")}
          />
        </View>

        <TouchableOpacity style={styles.SignOutButton}>
          <Text style={styles.SignoutText}>Sign out</Text>
        </TouchableOpacity>

        <View style={styles.ImageContainer}>
          <Image
            style={{ width: "100%", height: "80%", resizeMode: "contain" }}
            source={require("../../../assets/profileImage.png")}
          />
        </View>

        <Text style={styles.NameText}>DJones</Text>

        <LinearGradient
          // Button Linear Gradient
          colors={["#DABE9C", "#F2D2A3", "#DABE9C"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.DStrip}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("CreditScreen");
            }}
            style={styles.CreditButton}
          >
            <View style={styles.leftBarContainer}>
              <Text style={styles.Credittext}>Your Credit are: 100</Text>
            </View>

            <View style={styles.RightContainer}>
              <Ionicons
                name={"arrow-forward-outline"}
                size={h("3%")}
                color={mainColor}
              />
            </View>
          </TouchableOpacity>
        </LinearGradient>

        {/* Strips 1 */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("PersonalInfo");
          }}
          style={[styles.DStrip2, { marginTop: h("4%") }]}
        >
          <View style={styles.RightContainer2}>
            <Image
              style={styles.ImgIcon}
              source={require("../../../assets/ig1.png")}
            />
          </View>
          <View style={styles.leftBarContainer2}>
            <Text style={styles.Credittext2}>Personal work and Info</Text>
          </View>

          <View style={styles.RightContainer}>
            <Ionicons
              name={"arrow-forward-outline"}
              size={h("3%")}
              color={mainColor}
            />
          </View>
        </TouchableOpacity>
        {/* Strips 1 */}
        {/* Strips 2 */}
        <TouchableOpacity style={styles.DStrip2}>
          <View style={styles.RightContainer2}>
            <Image
              style={styles.ImgIcon}
              source={require("../../../assets/ig2.png")}
            />
          </View>
          <View style={styles.leftBarContainer2}>
            <Text style={styles.Credittext2}>S-Rate Cards</Text>
          </View>

          <View style={styles.RightContainer}>
            <Ionicons
              name={"arrow-forward-outline"}
              size={h("3%")}
              color={mainColor}
            />
          </View>
        </TouchableOpacity>
        {/* Strips 2 */}
        {/* Strips 3 */}
        <TouchableOpacity style={styles.DStrip2}>
          <View style={styles.RightContainer2}>
            <Image
              style={styles.ImgIcon}
              source={require("../../../assets/ig3.png")}
            />
          </View>
          <View style={styles.leftBarContainer2}>
            <Text style={styles.Credittext2}>Transaction History</Text>
          </View>

          <View style={styles.RightContainer}>
            <Ionicons
              name={"arrow-forward-outline"}
              size={h("3%")}
              color={mainColor}
            />
          </View>
        </TouchableOpacity>
        {/* Strips 3 */}
        {/* Strips 4 */}
        <TouchableOpacity style={styles.DStrip2}>
          <View style={styles.RightContainer2}>
            <Image
              style={styles.ImgIcon}
              source={require("../../../assets/ig4.png")}
            />
          </View>
          <View style={styles.leftBarContainer2}>
            <Text style={styles.Credittext2}>Consents</Text>
          </View>

          <View style={styles.RightContainer}>
            <Ionicons
              name={"arrow-forward-outline"}
              size={h("3%")}
              color={mainColor}
            />
          </View>
        </TouchableOpacity>
        {/* Strips 4 */}
      </View>
    </SafeAreaComp>
  );
};

const styles = StyleSheet.create({
  TopHeader: {
    width: "100%",
    height: h("29%"),
  },
  Credittext: {
    fontSize: h("2.8%"),
    fontWeight: "bold",
    color: mainColor,
  },
  Credittext2: {
    fontSize: h("2.2%"),
    fontWeight: "bold",
    color: mainColor,
  },
  MainContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  ImageContainer: {
    width: 250,
    height: 250,
    borderRadius: 1000 / 2,
    alignSelf: "center",
    position: "absolute",
    top: 50,
  },
  SignoutText: {
    color: "white",
    fontSize: h("2.2%"),
    fontWeight: "500",
  },
  SignOutButton: {
    position: "absolute",
    top: 10,
    right: 25,
  },
  NameText: {
    color: "#2A305B",
    fontSize: h("4.4%"),
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: h("4%"),
  },
  DStrip: {
    width: "100%",
    height: h("6%"),
  },
  DStrip2: {
    width: "100%",
    height: h("6%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: h("2.2%"),
    marginTop: h("1%"),
    backgroundColor: "#F0F0F4",
  },
  leftBarContainer: {
    width: "80%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  leftBarContainer2: {
    width: "70%",
    height: "100%",
    justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "red",
  },
  RightContainer: {
    width: "10%",
    height: "100%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  RightContainer2: {
    width: "10%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: h("1%"),
  },
  ImgIcon: {
    width: "70%",
    height: "70%",
    resizeMode: "contain",
  },
  CreditButton: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: h("2.2%"),
  },
});

export default Profile;
