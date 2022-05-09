import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
const PrizeCard = () => {
  return (
    <View style={styles.maindiv}>
      <View style={styles.imgcont}>
        <Image
          source={require("../../../assets/prize.png")}
          style={styles.imgshow}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.prizetxt}>20€ Playstation Voucher</Text>
      </View>
    </View>
  );
};

export default PrizeCard;

const styles = StyleSheet.create({
  maindiv: {
    width: w("92%"),
    height: h("17%"),
    alignSelf: "center",
    backgroundColor: "#F0F0F4",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginVertical: h("2%"),
  },
  imgshow: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  imgcont: {
    width: "50%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    width: "50%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  prizetxt: {
    fontSize: h("3%"),
    width: "80%",
    fontWeight: "bold",
  },
});
