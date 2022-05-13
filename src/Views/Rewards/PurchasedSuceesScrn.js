import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import SafeAreaComp from "../../Components/CommonComponents/SafeAreaComp";
import CustomAuthBtn from "../../Components/AuthComponents/CustomAuthBtn";
import { secColor } from "../../AppColors";
import { w, h } from "react-native-responsiveness";
const PurchasedSuceesScren = () => {
	return (
		<SafeAreaComp>
			<View style={styles.maindiv}>
				<Image
					source={require("../../../assets/success.png")}
					style={styles.imgShow}
				/>
				<Text style={styles.maintxt}>Purchase successful</Text>
				<Text style={styles.desctxt}>
					You can find the reward in the Purchased tab.
				</Text>
				<CustomAuthBtn
					bgColor={secColor}
					title='Ok'
					onClick={() => alert("Ok")}
				/>
			</View>
		</SafeAreaComp>
	);
};

export default PurchasedSuceesScren;

const styles = StyleSheet.create({
	imgShow: {
		width: w("30%"),
		height: w("30%"),
		resizeMode: "contain",
	},
	maindiv: {
		width: "100%",
		height: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
	},
	maintxt: {
		fontSize: h("4%"),
		fontWeight: "bold",
		textAlign: "center",
		marginVertical: h("2%"),
	},
	desctxt: {
		fontSize: h("2.2%"),
		width: "70%",
		textAlign: "center",
		marginBottom: h("2.5%"),
	},
});
