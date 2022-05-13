import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	ImageBackground,
	FlatList,
	Image,
	TouchableOpacity,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { w, h } from "react-native-responsiveness";
import { mainColor, screenBg, secColor } from "../../AppColors";
import CustomAuthBtn from "../../Components/AuthComponents/CustomAuthBtn";
import WelcomeCustomAuthBtn from "../../Components/AuthComponents/WelcomeCustomAuthBtn";
const WelcomeScreen = ({ navigation }) => {
	const [itemindex, setitemindex] = useState(0);
	const refContainer = useRef();

	const onboardData = [
		{
			title: "Welcome to",
			key: 0,
			subtitle:
				"the only service rating app allowing guests to review each employee individually",
			imglink: require("../../../assets/s_ratedlogo.png"),
		},
		{
			title: "MAKE IT PERSONAL",
			key: 1,

			subtitle:
				"Increase your personal evaluations and convert hotel guests to your personal advocates of your exceptional work",
			imglink: require("../../../assets/pic1.png"),
		},
		{
			key: 2,
			title: "BUILD UP YOUR CAREER",
			subtitle:
				"Get live feedback from customers that can help you improve your performance and skills. Create a high rated profile visible for your top managers.",
			imglink: require("../../../assets/pic2.png"),
		},
		{
			key: 3,
			title: "ACHIEVE YOUR GOALS & GET REWARDED",
			subtitle:
				"Achieve the goals assigned to you and get rewarded for your hard work",
			imglink: require("../../../assets/pic3.png"),
		},
		{
			key: 4,
			title: "SHARE YOUR ACHIEVEMENTS",
			subtitle:
				"Be proud of your achievements. Share ratings and personal achievements on your social accounts ",
			imglink: require("../../../assets/pic4.png"),
		},
	];
	useEffect(() => {
		if (itemindex < onboardData.length) {
			if (refContainer.current) {
				refContainer.current.scrollToIndex({
					animated: true,
					index: itemindex,
				});
			}
		} else {
			navigation.navigate("Login");
		}
	}, [itemindex]);
	return (
		<SafeAreaView style={styles.filldiv}>
			<FlatList
				ref={refContainer}
				data={onboardData}
				keyExtractor={(item) => item.title}
				horizontal
				showsHorizontalScrollIndicator={false}
				pagingEnabled
				scroll
				renderItem={({ item }) => (
					<View
						style={{
							...styles.myContainer,
							backgroundColor: item.key === 0 ? mainColor : screenBg,
						}}>
						<View
							style={{
								...styles.mainContent,
								justifyContent: item.key === 0 ? "center" : "space-evenly",
							}}>
							<Text
								style={{
									...styles.heading,
									color: item.key === 0 ? screenBg : "black",
								}}>
								{item.title}
							</Text>
							{item.key === 0 && (
								<Image source={item.imglink} style={styles.imgshow} />
							)}
							<Text
								style={{
									...styles.subHeading,
									color: item.key === 0 ? screenBg : "black",
								}}>
								{item.subtitle}
							</Text>
							{item.key !== 0 && (
								<Image source={item.imglink} style={styles.onbordimg} />
							)}
						</View>
						<View style={styles.navigators}>
							{item.key === 0 ? (
								<View style={styles.invisl} />
							) : (
								<WelcomeCustomAuthBtn
									title={"Prev"}
									onClick={() => {
										if (item.key === 0) {
											alert("nothing");
										} else {
											if (item.key === itemindex) {
												setitemindex(itemindex - 1);
											} else {
												setitemindex(item.key - 1);
											}
										}
									}}
								/>
							)}
							<View style={styles.dotcont}>
								{onboardData.map((dat, index) => (
									<View
										key={index}
										style={{
											width: index === item?.key ? 10 : 7,
											height: index === item?.key ? 10 : 7,
											borderRadius: 10,
											marginHorizontal: 2,
											backgroundColor:
												index === item?.key
													? item.key === 0
														? screenBg
														: mainColor
													: "lightgrey",
										}}
									/>
								))}
							</View>
							<WelcomeCustomAuthBtn
								title={"Next"}
								onClick={() => {
									if (item.key === 4) {
										navigation.navigate("MainDashbord");
									} else {
										if (item.key === itemindex) {
											setitemindex(itemindex + 1);
										} else {
											setitemindex(item.key + 1);
										}
									}
								}}
							/>
						</View>
						<TouchableOpacity
							style={styles.skipbtn}
							onPress={() => navigation.navigate("MainDashbord")}>
							<Text
								style={{
									fontSize: h("2%"),
									fontWeight: "bold",
									color: item.key === 0 ? screenBg : mainColor,
								}}>
								Skip to home
							</Text>
						</TouchableOpacity>
					</View>
				)}
			/>
		</SafeAreaView>
	);
};

export default WelcomeScreen;

const styles = StyleSheet.create({
	filldiv: {
		width: "100%",
		height: "100%",
	},
	imgbg: {
		height: "100%",
		width: "100%",
		resizeMode: "contain",
	},
	navigators: {
		width: w("100%"),
		height: h("9%"),
		display: "flex",
		alignItems: "center",
		justifyContent: "space-evenly",
		flexDirection: "row",
	},
	skipbtn: {
		width: w("100%"),
		height: h("4%"),
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	contentContain: {
		width: "100%",
		height: h("85%"),
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
	},
	myContainer: {
		width: w("100%"),
		height: h("100%"),
		overflow: "hidden",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
	},
	mainContent: {
		width: w("100%"),
		height: h("85%"),
		display: "flex",
		alignItems: "center",
		flexDirection: "column",
	},
	mybtn: {
		position: "absolute",
		bottom: -30,
		width: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		zIndex: 100000,
	},
	keytxt: {
		fontSize: h("3%"),
		color: "white",
		fontWeight: "bold",
	},
	circlenumber: {
		position: "absolute",
		top: -h("4%"),
		width: h("7%"),
		height: h("7%"),
		borderRadius: h("7%"),
		backgroundColor: "#635BD6",
		borderWidth: h("0.6%"),
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		borderColor: "white",
	},
	onbordimg: {
		width: w("92%"),
		height: h("50%"),
		resizeMode: "contain",
		alignSelf: "center",
	},
	heading: {
		fontSize: h("4%"),
		width: "80%",
		alignSelf: "center",
		fontWeight: "bold",
		textAlign: "center",
	},
	subHeading: {
		fontSize: h("2.5%"),
		width: "80%",
		alignSelf: "center",
		textAlign: "center",
		textTransform: "capitalize",
	},
	imgshow: {
		width: w("70%"),
		height: w("35%"),
		resizeMode: "contain",
		alignSelf: "center",
		marginVertical: h("2.5%"),
	},
	invisl: { width: "35%", height: "100%" },
	dotcont: {
		width: "25%",
		height: 10,
		display: "flex",
		alignItems: "center",
		justifyContent: "space-evenly",
		flexDirection: "row",
	},
});
