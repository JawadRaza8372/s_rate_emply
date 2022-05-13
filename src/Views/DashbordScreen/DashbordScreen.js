import { StyleSheet, Image, Text, View } from "react-native";
import React, { useRef, useState } from "react";
import Carousel from "react-native-snap-carousel";
import { w, h } from "react-native-responsiveness";
import SafeAreaComp from "../../Components/CommonComponents/SafeAreaComp";
import { inputBg, mainColor, screenBg } from "../../AppColors";
const DashbordScreen = () => {
	const c = useRef(null);
	const [activeCard, setactiveCard] = useState(0);

	return (
		<SafeAreaComp>
			<View style={styles.maindiv}>
				<Image
					source={require("../../../assets/Background.png")}
					style={styles.imgshow}
				/>
				<View style={styles.maincontainer}>
					<View style={styles.headerdiv}>
						<Text style={styles.headertxt}>Targets</Text>
						<Text style={styles.subheadingtxt}>
							Complete targets to earn Credits!
						</Text>
						<View style={styles.littlebar} />
					</View>
					<Carousel
						ref={c}
						data={[
							{
								key: 0,
								title: "Receive 10 evaluations from guests",
								subtitle: "+40",
								imglink: require("../../../assets/1.png"),
							},
							{
								key: 1,
								title: "Receive 20 evaluations from guests",
								subtitle: "+40",
								imglink: require("../../../assets/2.png"),
							},
							{
								key: 2,
								title: "Receive 30 evaluations from guests",
								subtitle: "+50",
								imglink: require("../../../assets/3.png"),
							},
						]}
						renderItem={({ item, index }) => {
							return (
								<View
									style={{
										width: w("60%"),
										height: h("75%"),
										display: "flex",
										alignItems:
											activeCard === index
												? "center"
												: activeCard > index
												? "flex-end"
												: "flex-start",
										justifyContent: "space-evenly",
										flexDirection: "column",
									}}>
									<Text style={styles.cardheading}>
										{index === activeCard ? item.title : " "}
									</Text>
									<Image
										source={item.imglink}
										style={
											activeCard === index
												? styles.subshowimg
												: styles.subshowimg1
										}
									/>
									<View>
										<Text style={styles.carddescp}>
											{index === activeCard ? "Reward:" : " "}
										</Text>
										<Text style={styles.rewardtxt}>
											{index === activeCard ? item.subtitle : " "}
										</Text>
										<Text style={styles.carddescp}>
											{index === activeCard ? "Credits" : " "}
										</Text>
									</View>
								</View>
							);
						}}
						sliderWidth={w("97%")}
						itemWidth={w("60%")}
						layout='default'
						onSnapToItem={(index) => setactiveCard(index)}
					/>
				</View>
			</View>
		</SafeAreaComp>
	);
};

export default DashbordScreen;

const styles = StyleSheet.create({
	maindiv: {
		width: w("100%"),
		height: h("100%"),
		position: "relative",
	},
	imgshow: {
		width: w("100%"),
		position: "absolute",
		bottom: h("37%"),
	},
	maincontainer: {
		width: w("100%"),
		height: h("100%"),
		position: "absolute",
		top: 0,
	},
	subshowimg: {
		width: w("35%"),
		height: w("35%"),
	},
	subshowimg1: {
		width: w("15%"),
		height: w("15%"),
	},
	headerdiv: {
		width: w("100%"),
		height: h("25%"),
		display: "flex",
		alignItems: "center",
		justifyContent: "space-evenly",
		flexDirection: "column",
	},
	headertxt: {
		textAlign: "center",
		fontSize: h("4%"),
		fontWeight: "bold",
		color: screenBg,
	},
	subheadingtxt: {
		textAlign: "center",
		fontSize: h("2%"),
		color: screenBg,
	},
	littlebar: {
		width: w("20%"),
		height: h("1%"),
		backgroundColor: inputBg,
		borderRadius: h("1%"),
	},
	cardheading: {
		fontSize: h("4%"),
		fontWeight: "bold",
		textAlign: "center",
		color: screenBg,
	},
	carddescp: {
		fontSize: h("3%"),
		textAlign: "center",
		color: mainColor,
		marginVertical: 6,
	},
	rewardtxt: {
		fontSize: h("4%"),
		fontWeight: "bold",
		textAlign: "center",
		color: mainColor,
	},
});
