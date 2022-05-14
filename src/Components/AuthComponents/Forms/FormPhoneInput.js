import { StyleSheet, Text, View } from "react-native";
import React, { useRef, useState } from "react";
import ErrorMessage from "./ErrorMessage";
import PhoneInput from "react-native-phone-number-input";
import { w, h } from "react-native-responsiveness";
import { useFormikContext } from "formik";
import { screenBg, stopColor } from "../../../AppColors";
const FormPhoneInput = ({ name, countryCode, ...otherProps }) => {
	const phoneInput = useRef();
	const [showMessage, setShowMessage] = useState(false);
	const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
	return (
		<View style={styles.phonetxt}>
			<Text
				style={{
					...styles.titletxt,
					color: errors[name] ? stopColor : "#202442",
				}}>
				Phone Number*
			</Text>
			<PhoneInput
				ref={phoneInput}
				// defaultValue={value}
				defaultCode='GR'
				layout='second'
				onChangeCountry={(country) => countryCode(country.callingCode[0])}
				onChangeText={handleChange(name)}
				// withDarkTheme
				withShadow={false}
				containerStyle={{
					backgroundColor: screenBg,
					borderBottomColor: errors[name] ? stopColor : "#94A3BE",
					borderBottomWidth: 1,
					width: w("88%"),
				}}
				textContainerStyle={{
					backgroundColor: screenBg,
				}}
			/>
			<ErrorMessage
				error={errors[name] ? errors[name] : "Enter Valid Number"}
				visible={errors[name]}
			/>
		</View>
	);
};

export default FormPhoneInput;

const styles = StyleSheet.create({
	titletxt: {
		fontSize: h("1.7%"),
		textTransform: "capitalize",
	},
	phonetxt: {
		display: "flex",
		alignItems: "flex-start",
		justifyContent: "center",
		width: w("88%"),
		alignSelf: "center",
	},
});
