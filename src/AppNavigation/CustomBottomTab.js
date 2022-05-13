import React from "react";
import {
	BottomTabBar,
	createBottomTabNavigator,
	BottomTabBarHeightContext,
	useBottomTabBarHeight,
} from "@react-navigation/bottom-tabs";
import {
	MaterialCommunityIcons,
	Foundation,
	FontAwesome,
	Entypo,
	MaterialIcons,
	AntDesign,
	Ionicons,
	Feather,
	SimpleLineIcons,
} from "@expo/vector-icons";
import { TouchableOpacity, View, Text } from "react-native";
import { w, h } from "react-native-responsiveness";
const Tab = createBottomTabNavigator();
import { inputBg, mainColor, screenBg } from "../AppColors";

import MainDashbordScreen from "../Views/MainDashbordScreen/MainDashbordScreen";
import DashbordScreen from "../Views/DashbordScreen/DashbordScreen";
import RankingScreen from "../Views/RankingSection/RankingScreen";
import Reward from "../Views/Rewards/Reward";
import Profile from "../Views/Profile/Profile";

const CustomBottomTab = () => {
	return (
		<Tab.Navigator
			initialRouteName='DashbordScreen'
			screenOptions={{
				tabBarStyle: {
					shadowColor: "black",
					shadowOffset: { width: 0, height: 3 },
					shadowOpacity: 0.8,
					shadowRadius: 2,
					backgroundColor: screenBg,
					elevation: 1,
				},
				headerShown: false,
				tabBarShowLabel: false,
			}}>
			<Tab.Screen
				name='DashbordScreen'
				component={MainDashbordScreen}
				options={{
					tabBarIcon: ({ color, focused }) => (
						<View
							style={{
								height: "100%",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								flexDirection: "column",
								width: "100%",
							}}>
							<Entypo
								name='home'
								color={focused ? mainColor : "lightgrey"}
								size={h("2.5%")}
							/>
							<Text style={{ color: focused ? mainColor : "lightgrey" }}>
								Home
							</Text>
						</View>
					),
				}}
			/>
			<Tab.Screen
				name='Targets'
				component={DashbordScreen}
				options={{
					tabBarIcon: ({ color, focused }) => (
						<View
							style={{
								height: "100%",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								flexDirection: "column",
								width: "100%",
							}}>
							<Feather
								name='target'
								color={focused ? mainColor : "lightgrey"}
								size={h("2.5%")}
							/>
							<Text style={{ color: focused ? mainColor : "lightgrey" }}>
								Targets
							</Text>
						</View>
					),
				}}
			/>
			<Tab.Screen
				name='Ranking'
				component={RankingScreen}
				options={{
					tabBarIcon: ({ color, focused }) => (
						<View
							style={{
								height: "100%",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								flexDirection: "column",
								width: "100%",
							}}>
							<SimpleLineIcons
								name='badge'
								color={focused ? mainColor : "lightgrey"}
								size={h("2.5%")}
							/>
							<Text style={{ color: focused ? mainColor : "lightgrey" }}>
								Ranking
							</Text>
						</View>
					),
				}}
			/>
			<Tab.Screen
				name='Rewards'
				component={Reward}
				options={{
					tabBarIcon: ({ color, focused }) => (
						<View
							style={{
								height: "100%",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								flexDirection: "column",
								width: "100%",
							}}>
							<Ionicons
								name='gift-outline'
								color={focused ? mainColor : "lightgrey"}
								size={h("2.5%")}
							/>
							<Text style={{ color: focused ? mainColor : "lightgrey" }}>
								Rewards
							</Text>
						</View>
					),
				}}
			/>
			<Tab.Screen
				name='Profile'
				component={Profile}
				options={{
					tabBarIcon: ({ color, focused }) => (
						<View
							style={{
								height: "100%",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								flexDirection: "column",
								width: "100%",
							}}>
							<FontAwesome
								name='user-circle'
								color={focused ? mainColor : "lightgrey"}
								size={h("2.5%")}
							/>
							<Text style={{ color: focused ? mainColor : "lightgrey" }}>
								Profile
							</Text>
						</View>
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default CustomBottomTab;
