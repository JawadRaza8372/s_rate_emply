import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import CountryPicker, {
  isCountryCode,
} from "react-native-country-picker-modal";
import CustomAuthBtn from "./CustomAuthBtn";
import { secColor } from "../../AppColors";
import { w, h } from "react-native-responsiveness";
const PhoneNumberField = () => {
  const [isVisible, setisVisible] = useState(false);
  const [countryCode, setcountryCode] = useState("");
  return (
    <View style={styles.maindiv}>
      {isVisible ? (
        countryCode.length !== 0 ? (
          <View
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setisVisible(false);
                setcountryCode("");
              }}
            >
              <Text>{countryCode}</Text>
            </TouchableOpacity>
            <TextInput style={styles.custminp} placeholder="phonenumber" />
          </View>
        ) : (
          <CountryPicker
            {...{
              withFilter: true,
              withFlag: false,
              withCountryNameButton: true,
              withAlphaFilter: true,
              withCallingCode: true,
              withEmoji: false,
              withModal: true,
              onSelect: (Country) => {
                setcountryCode("+" + Country.callingCode[0]);
              },
            }}
            visible={isVisible}
          />
        )
      ) : (
        <CustomAuthBtn
          bgColor={secColor}
          title="open"
          onClick={() => setisVisible(!isVisible)}
        />
      )}
    </View>
  );
};

export default PhoneNumberField;

const styles = StyleSheet.create({
  custminp: {
    height: h("5%"),
    borderRadius: h("1%"),
    flex: 1,
    marginLeft: 10,
  },
  maindiv: {
    width: w("88%"),
    height: h("8%"),
    alignSelf: "center",
    backgroundColor: "gold",
    paddingHorizontal: 10,
  },
});
