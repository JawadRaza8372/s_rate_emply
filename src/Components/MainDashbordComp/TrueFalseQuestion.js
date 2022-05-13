import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
import { mainColor, screenBg } from "../../AppColors";
const TrueFalseQuestion = ({ question, value }) => {
	return (
		<View style={styles.colmndiv}>
			<Text style={styles.question}>{question}</Text>
			<View style={styles.rowcont}>
				<View
					style={{
						...styles.btndiv,
						borderWidth: 2,
						borderColor: value === true ? mainColor : "#8392AF",
						backgroundColor: value === true ? mainColor : screenBg,
					}}>
					<Text
						style={{
							...styles.testp,
							color: value === true ? screenBg : "#8392AF",
						}}>
						Yes
					</Text>
				</View>
				<View
					style={{
						...styles.btndiv,
						borderWidth: 2,
						borderColor: value === false ? mainColor : "#8392AF",
						backgroundColor: value === false ? mainColor : screenBg,
					}}>
					<Text
						style={{
							...styles.testp,
							color: value === false ? screenBg : "#8392AF",
						}}>
						No
					</Text>
				</View>
			</View>
		</View>
	);
};

export default TrueFalseQuestion;

const styles = StyleSheet.create({
	rowcont: {
		width: w("100%"),
		display: "flex",
		alignItems: "center",
		justifyContent: "space-evenly",
		flexDirection: "row",
	},
	colmndiv: {
		width: w("100%"),
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
		marginBottom: h("2%"),
	},
	question: {
		width: "90%",
		fontWeight: "bold",
		marginBottom: h("1%"),
	},
	btndiv: {
		width: w("33%"),
		height: h("6%"),
		borderRadius: h("7%"),
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
	},
	testp: {
		fontSize: h("2.7%"),
	},
});
