import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
import { mainColor, screenBg, secColor } from "../../AppColors";
const RankingCard = ({ keys, name, explain, credits }) => {
  const styles = StyleSheet.create({
    maindiv: {
      width: w("100%"),
      height: h("13%"),
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
      flexDirection: "row",
      marginTop: h("1%"),
    },
    avtarcont: {
      width: h("12%"),
      height: h("12%"),
      borderRadius: h("13%"),

      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
    },
    infoContin: {
      width: h("23%"),
      height: h("13%"),
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-evenly",
      flexDirection: "column",
    },
    crownimg: {
      position: "absolute",
      top: -h("3%"),
      width: h("5%"),
      height: h("4%"),
    },
    numhead: {
      fontSize: keys < 3 ? h("5%") : h("3%"),
      color: keys < 3 ? secColor : screenBg,
    },
    avtar: {
      width: keys < 3 ? h("11%") : h("9%"),
      height: keys < 3 ? h("11%") : h("9%"),
      borderRadius: h("12%"),
      overflow: "hidden",
      borderWidth: keys < 3 ? 2 : 0,
      borderColor: "#1CABEF",
    },
    name: {
      fontSize: h("2.5%"),
      fontWeight: "bold",
      color: keys < 3 ? screenBg : mainColor,
    },
    profession: {
      fontSize: h("1.8%"),
      color: keys < 3 ? screenBg : mainColor,
    },
    credits: {
      color: keys < 3 ? screenBg : mainColor,
      fontSize: h("2%"),
      fontWeight: "bold",
    },
    seprators1: {
      width: "35%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
      flexDirection: "row",
      backgroundColor: mainColor,
    },
    seprators: {
      width: "65%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
      flexDirection: "row",
      backgroundColor: keys < 3 ? mainColor : "#F0F0F4",
    },
  });

  return (
    <View style={styles.maindiv}>
      <View style={styles.seprators1}>
        <Text style={styles.numhead}>{keys + 1}</Text>
        <View style={styles.avtarcont}>
          {keys < 1 && (
            <Image
              source={require("../../../assets/crownGold.png")}
              style={styles.crownimg}
            />
          )}
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            }}
            style={styles.avtar}
          />
        </View>
      </View>
      <View style={styles.seprators}>
        <View style={styles.infoContin}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.profession}>{explain}</Text>
        </View>
        <Text style={styles.credits}>{credits}</Text>
      </View>
    </View>
  );
};

export default RankingCard;
