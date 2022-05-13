import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SafeAreaComp from "../../Components/CommonComponents/SafeAreaComp";
import ThankCard from "../../Components/MainDashbordComp/ThankCard";
import { w, h } from "react-native-responsiveness";
import { screenBg } from "../../AppColors";
const ThankYouCardScreen = () => {
	return (
		<SafeAreaComp>
			<View style={styles.maindiv}>
				<ThankCard
					imglink={require("../../../assets/thank2.png")}
					text={"For your amazing evaluation!"}
					isHiden={true}
					onClick={() => alert("done")}
				/>
			</View>
		</SafeAreaComp>
	);
};

export default ThankYouCardScreen;

const styles = StyleSheet.create({
	maindiv: {
		width: w("100%"),
		height: h("100%"),
		backgroundColor: screenBg,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
	},
});
