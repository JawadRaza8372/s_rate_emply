import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import SafeAreaComp from "../../Components/CommonComponents/SafeAreaComp";
import { w, h } from "react-native-responsiveness";
import { AntDesign } from "@expo/vector-icons";
import PrizeCard from "../../Components/RankingComponents/PrizeCard";
import { mainColor } from "../../AppColors";
import Header from "../../Components/CommonComponents/Header";
const TopRankingScreen = ({ navigation }) => {
  return (
    <SafeAreaComp>
      <View style={styles.maindiv}>
        <ScrollView contentContainerStyle={{ width: w("100%") }}>
          <Header onPress={() => navigation.goBack()} />
          <Text style={styles.maineading}>Top 3 Monthly Gifts</Text>
          <Text style={styles.dattext}>1st of May - 1st of June 2022</Text>

          <Text style={styles.descript}>
            Be one of the <Text style={styles.boldtext}>TOP 3 users</Text> at
            the end of the month and earn one of the
            <Text style={styles.boldtext}>amazing gifts</Text> below!
          </Text>
          <View style={styles.timeRemain}>
            <AntDesign name="clockcircleo" size={h("2.5%")} color={mainColor} />
            <Text style={styles.timetxtr}>20 days left!</Text>
          </View>
          <View style={styles.priceimgcont}>
            <Image
              source={require("../../../assets/price1.png")}
              style={styles.showimg}
            />
          </View>
          <PrizeCard />

          <View style={styles.priceimgcont}>
            <Image
              source={require("../../../assets/price2.png")}
              style={styles.showimg}
            />
          </View>
          <PrizeCard />
          <View style={styles.priceimgcont}>
            <Image
              source={require("../../../assets/price3.png")}
              style={styles.showimg}
            />
          </View>
          <PrizeCard />
        </ScrollView>
      </View>
    </SafeAreaComp>
  );
};

export default TopRankingScreen;

const styles = StyleSheet.create({
  maindiv: {
    width: w("100%"),
    height: h("100%"),
  },
  priceimgcont: {
    width: w("60%"),
    height: h("5%"),
    alignSelf: "center",
  },
  showimg: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  descript: {
    width: "80%",
    textAlign: "center",
    alignSelf: "center",
    marginBottom: h("2%"),
  },
  maineading: {
    fontSize: h("4%"),
    fontWeight: "bold",
    textAlign: "center",
    marginTop: h("2%"),
  },
  dattext: {
    textAlign: "center",
    width: "80%",
    alignSelf: "center",
    marginVertical: h("2%"),
    fontWeight: "bold",
    fontSize: h("2%"),
  },
  timeRemain: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: h("2%"),
  },
  timetxtr: {
    fontSize: h("2.5%"),
    color: mainColor,
    marginLeft: 10,
    fontWeight: "bold",
  },
  boldtext: {
    fontWeight: "bold",
  },
});
