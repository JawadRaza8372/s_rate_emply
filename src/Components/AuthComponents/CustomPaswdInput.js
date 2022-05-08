import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { inputBg, mainColor, stopColor } from "../../AppColors";
import { w, h } from "react-native-responsiveness";
const CustomPaswdInput = ({
  title,
  placeholder,
  onChange,
  onBlur,
  error,
  ...otherprops
}) => {
  const [showPaswd, setshowPaswd] = useState(true);
  return (
    <View
      style={{
        ...styles.customInptdiv,
        borderColor: error ? stopColor : "#94A3BE",
      }}
    >
      <Text
        style={{ ...styles.titletxt, color: error ? stopColor : "#202442" }}
      >
        {title}
      </Text>
      <View
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <TextInput
          {...otherprops}
          style={{ ...styles.custminp, width: "88%", paddingLeft: 10 }}
          secureTextEntry={showPaswd}
          onChangeText={onChange}
          placeholder={`${placeholder}`}
          autoCapitalize="none"
          autoCorrect={false}
          autoComplete="off"
          onBlur={onBlur}
        />
        <TouchableOpacity
          style={styles.inpBtn}
          onPress={() => setshowPaswd(!showPaswd)}
        >
          <Feather
            name={showPaswd ? "eye-off" : "eye"}
            size={h("2.5%")}
            color={mainColor}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomPaswdInput;

const styles = StyleSheet.create({
  customInptdiv: {
    width: w("88%"),
    borderRadius: h("1%"),
    height: h("8%"),
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
    alignSelf: "center",
    borderBottomWidth: 1,
  },
  custminp: {
    height: h("5%"),
  },
  inpBtn: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "8%",
  },
  titletxt: {
    fontSize: h("1.7%"),
    textTransform: "capitalize",
  },
});
