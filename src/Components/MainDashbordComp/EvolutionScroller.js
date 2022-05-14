import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { screenBg } from "../../AppColors";

const EvolutionScroller = ({ partialValue, totalValue, title }) => {
	const percentage = (obtained, total) => {
		return (100 * obtained) / total;
	};
	const choosecolor =
		percentage(partialValue, totalValue) <= 20
			? "#C91C14"
			: percentage(partialValue, totalValue) <= 40
			? "#D17A00"
			: percentage(partialValue, totalValue) <= 60
			? "#B88D00"
			: percentage(partialValue, totalValue) <= 80
			? "#2EA86F"
			: "#107E55";
	const emojiselection = () => {
		const myperctn = percentage(partialValue, totalValue);
		if (myperctn <= 20) {
			return <FontAwesome5 name='angry' size={h("4%")} color='#C91C14' />;
		} else if (myperctn <= 40) {
			return (
				<MaterialCommunityIcons
					name='emoticon-confused-outline'
					size={h("4%")}
					color='#D17A00'
				/>
			);
		} else if (myperctn <= 60) {
			return (
				<MaterialCommunityIcons
					name='emoticon-neutral-outline'
					size={h("4%")}
					color='#B88D00'
				/>
			);
		} else if (myperctn <= 80) {
			return (
				<MaterialCommunityIcons
					name='emoticon-happy-outline'
					size={h("4%")}
					color='#2EA86F'
				/>
			);
		} else {
			return <FontAwesome5 name='grin-stars' size={h("4%")} color='#107E55' />;
		}
	};
	return (
		<View style={styles.maindiv}>
			<Text style={styles.question}>{title}</Text>
			<Text style={styles.subtitle}>(95 Evolutions)</Text>
			<View style={styles.rowcont}>
				<View style={styles.outerdiv}>
					<View
						style={{
							...styles.filler,
							width: `${percentage(partialValue, totalValue)}%`,
							backgroundColor: choosecolor,
						}}
					/>
				</View>

				<Text>
					{partialValue} / {totalValue}
				</Text>
			</View>
			<View
				style={{
					...styles.emojidiv,
					left:
						(percentage(partialValue, totalValue) / 100) * w("82%") - h("2%"),
				}}>
				{emojiselection()}
			</View>
		</View>
	);
};

export default EvolutionScroller;

const styles = StyleSheet.create({
	maindiv: {
		width: w("97%"),
		alignSelf: "center",
		marginBottom: h("2%"),
	},
	outerdiv: {
		width: w("82%"),
		height: h("2.5%"),
		borderRadius: h("2.5%"),
		backgroundColor: "#8D99AE",
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-start",
		flexDirection: "row",
	},
	filler: {
		height: "100%",
		borderRadius: h("2.5%"),
	},
	emojidiv: {
		position: "absolute",
		top: h("6.4%"),
		width: h("4%"),
		height: h("4%"),
		backgroundColor: screenBg,
		borderRadius: h("4%"),
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	question: {
		fontWeight: "bold",
		fontSize: h("2.5%"),
		marginBottom: h("1%"),
	},
	subtitle: {
		fontSize: h("1.8%"),
		marginBottom: h("1%"),
		color: "#202442",
	},
	rowcont: {
		width: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-evenly",
		flexDirection: "row",
	},
});
