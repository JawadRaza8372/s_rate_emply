import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
import SafeAreaComp from "../../Components/CommonComponents/SafeAreaComp";
import RankingsBtn from "../../Components/RankingComponents/RankingsBtn";
import RankingCard from "../../Components/RankingComponents/RankingCard";
import HeaderComponet from "../../Components/RankingComponents/HeaderComponet";
import { screenBg } from "../../AppColors";
import { NavigationContainer } from "@react-navigation/native";
const RankingScreen = ({ navigation }) => {
  const usersdat = [
    { name: "Umer Aftab", explain: "Artist", credits: "99,500" },
    { name: "Umer Irfan", explain: "Artist", credits: "91,500" },
    { name: "Umer Ali", explain: "Artist", credits: "23,500" },
    { name: "Umer Ahmed", explain: "Artist", credits: "22,500" },
    { name: "Umer 1", explain: "Artist", credits: "21,500" },
    { name: "Umer 2", explain: "Artist", credits: "20,500" },
    { name: "Umer 3", explain: "Artist", credits: "19,500" },
  ];
  return (
    <SafeAreaComp>
      <View
        style={{ width: "100%", height: h("100%"), backgroundColor: screenBg }}
      >
        <Text style={styles.maineading}>Ranking</Text>
        <Text style={styles.descript}>
          Compete in rankings with your credits Top 3 users earn amazing gifts
          every month!
        </Text>
        <Text style={styles.dattext}>1st of May - 1st of June 2022</Text>

        <RankingsBtn onClick={() => navigation.navigate("TopRankingScreen")} />
        <HeaderComponet />
        <FlatList
          data={usersdat}
          contentContainerStyle={{ paddingVertical: h("2%") }}
          keyExtractor={(item) => item.name}
          renderItem={({ item, index }) => (
            <RankingCard
              name={item.name}
              explain={item.explain}
              credits={item.credits}
              keys={index}
            />
          )}
        />
      </View>
    </SafeAreaComp>
  );
};

export default RankingScreen;

const styles = StyleSheet.create({
  descript: {
    width: "80%",
    textAlign: "center",
    alignSelf: "center",
    marginTop: h("1%"),
  },
  dattext: {
    textAlign: "center",
    width: "80%",
    alignSelf: "center",
    marginVertical: h("2%"),
    fontWeight: "bold",
    fontSize: h("2%"),
  },
  maineading: {
    fontSize: h("4%"),
    fontWeight: "bold",
    textAlign: "center",
    marginTop: h("2%"),
  },
});
