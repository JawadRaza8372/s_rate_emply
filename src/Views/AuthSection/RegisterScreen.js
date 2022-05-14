import { StyleSheet, Text, View } from "react-native";
import React, { useState, useRef } from "react";
import SafeAreaComp from "../../Components/CommonComponents/SafeAreaComp";
import Forms from "../../Components/AuthComponents/Forms/Forms";
import FormSubmitButton from "../../Components/AuthComponents/Forms/FormSubmitButton";
import InputFieldForms from "../../Components/AuthComponents/Forms/InputFieldForms";
import * as Yup from "yup";
import PasswordInputFieldForm from "../../Components/AuthComponents/Forms/PasswordInputFieldForm";
import CountryPicker from "react-native-country-picker-modal";
import PhoneInput from "react-native-phone-number-input";
import CustomAuthBtn from "../../Components/AuthComponents/CustomAuthBtn";
import { screenBg, secColor, stopColor } from "../../AppColors";
import ErrorMessage from "../../Components/AuthComponents/Forms/ErrorMessage";
import { w, h } from "react-native-responsiveness";
import PhoneNumberField from "../../Components/AuthComponents/PhoneNumberField";
import { MaterialIcons } from "@expo/vector-icons";
import { mainColor } from "../../AppColors";
import { ScrollView } from "react-native-gesture-handler";
import FormPhoneInput from "../../Components/AuthComponents/Forms/FormPhoneInput";
import Header from "../../Components/CommonComponents/Header";
import FormPolicyField from "../../Components/AuthComponents/Forms/FormPolicyField";
import { KeyboardAwareScrollView } from "@codler/react-native-keyboard-aware-scroll-view";
import axios from "axios";
import {
	srate_api_base_url,
	srate_auth_base_url,
} from "../../BreakPoints/Breakpoints";

const RegisterScreen = ({ navigation }) => {
	const finalmsg =
		"Email and Nickname are unique and cannot be\nchanged. Your Nickname will appear to customers.";
	const [value, setValue] = useState("");
	const [countryCode, setcountryCode] = useState("+30");
	const [valid, setValid] = useState(false);
	const [checkbox, setcheckbox] = useState(false);
	const [showmsg, setshowmsg] = useState(false);
	const phoneInput = useRef();

	const handleCountryCode = (dat) => {
		setcountryCode(dat);
	};
	const validationSchema = Yup.object().shape({
		firstname: Yup.string().required().label("First Name"),
		lastname: Yup.string().required().label("Last Name"),
		nickname: Yup.string().required().label("Nick Name"),
		email: Yup.string().required().email().label("Email"),
		phone: Yup.string().required().max(15).min(5).label("Phone Number"),
		password: Yup.string().required().min(4).label("Password"),
		repassword: Yup.string().required().min(4).label("Re-type Password"),
	});

	let onSubmitFun = async (values) => {
		if (values) {
			if (checkbox === true) {
				if (values.password === values.repassword) {
					// navigation.navigate("OtpScreen");
					const data = {
						username: values.email,
						password: values.password,
						email: values.email,
						userAccountType: "local",
						firstName: values.firstname,
						lastName: values.lastname,
						mobilePrefix: countryCode,
						mobileNumber: values.phone,
						nickname: values.nickname,
					};
					console.log(data);
					try {
						const res = await axios.post(
							`${srate_api_base_url}/registration/employee`,
							data
						);
						console.log("responce", res.data);
					} catch (error) {
						console.log("error", error);
					}
				} else {
					alert("Please Enter Same Password");
				}
			} else {
				setshowmsg(true);
			}
		}
	};

	return (
		<SafeAreaComp>
			<KeyboardAwareScrollView>
				<View style={styles.registerScreen}>
					<ScrollView
						nestedScrollEnabled
						contentContainerStyle={{ width: w("100%") }}>
						<View style={styles.headerContent}>
							<Header onPress={() => navigation.goBack()} />
							<Text style={styles.maineading}>Register</Text>
						</View>
						<Forms
							initialValues={{
								firstname: "",
								lastname: "",
								nickname: "",
								email: "",
								password: "",
								repassword: "",
							}}
							onSubmit={onSubmitFun}
							validationSchema={validationSchema}>
							<InputFieldForms
								title='First Name*'
								name='firstname'
								placeholder={"Enter Your First Name"}
							/>
							<View style={styles.seprator} />
							<InputFieldForms
								title='Last Name*'
								name='lastname'
								placeholder={"Enter Your Last Name"}
							/>
							<View style={styles.seprator} />

							<InputFieldForms
								title='Nick Name*'
								name='nickname'
								placeholder={"Enter Your Nick Name"}
							/>
							<View style={styles.seprator} />

							<InputFieldForms
								title='Email*'
								name='email'
								placeholder={"Enter Your Email"}
							/>
							<View style={styles.seprator} />

							<FormPhoneInput name='phone' countryCode={handleCountryCode} />

							{/* <PhoneNumberField /> */}

							<View style={styles.seprator} />

							<PasswordInputFieldForm
								title={"Password*"}
								name='password'
								placeholder={"Enter Your Password"}
							/>
							<View style={styles.seprator} />

							<PasswordInputFieldForm
								title={"Retype Password*"}
								name='repassword'
								placeholder={"Re-Enter Your Password"}
							/>
							<View style={styles.seprator} />
							<Text style={styles.mandTxt}>*Mandatory fields</Text>
							<Text style={styles.mandtxtsub}>{finalmsg}</Text>
							<FormPolicyField
								onChange={() => setcheckbox(!checkbox)}
								value={checkbox}
								msg={showmsg}
							/>
							<FormSubmitButton title={"Register"} />
							<View style={styles.seprator} />
						</Forms>
					</ScrollView>
				</View>
			</KeyboardAwareScrollView>
		</SafeAreaComp>
	);
};

export default RegisterScreen;

const styles = StyleSheet.create({
	registerScreen: {
		width: w("100%"),
		height: h("100%"),
		display: "flex",
		alignItems: "center",
		justifyContent: "space-evenly",
		flexDirection: "column",
	},
	headerContent: {
		width: "100%",
		height: h("13%"),
		display: "flex",
		alignItems: "center",
		justifyContent: "space-evenly",
		flexDirection: "column",
	},
	phonetxt: {
		display: "flex",
		alignItems: "flex-start",
		justifyContent: "center",
		width: w("88%"),
		alignSelf: "center",
	},
	seprator: {
		marginBottom: h("2%"),
	},
	maineading: {
		fontSize: h("4%"),
		fontWeight: "bold",
		textAlign: "center",
	},
	titletxt: {
		fontSize: h("1.7%"),
		textTransform: "capitalize",
	},
	mandTxt: {
		fontSize: h("1.9%"),
		width: w("88%"),
		alignSelf: "center",
		marginTop: h("2.5%"),
	},
	mandtxtsub: {
		fontSize: h("1.7%"),
		width: w("87%"),
		alignSelf: "center",
		marginVertical: h("2%"),
	},
});
