import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect } from "react";

// AuthSection screens
import AuthSelection from "../Views/AuthSection/AuthSelection";
import LoginScreen from "../Views/AuthSection/LoginScreen";
import SplashScreen from "../Views/AuthSection/SplashScreen";
import SplashScreenSec from "../Views/AuthSection/SplashScreenSec";
import RegisterScreen from "../Views/AuthSection/RegisterScreen";
import OtpScreen from "../Views/AuthSection/OtpScreen";
import FailedScreen from "../Views/AuthSection/FailedScreen";
import SuccessScreen from "../Views/AuthSection/SuccessScreen";
import RegistrationSuccess from "../Views/AuthSection/RegistrationSuccess";
import ForgotPasswordScreen from "../Views/AuthSection/ForgotPasswordScreen";
import WelcomeScreen from "../Views/AuthSection/WelcomeScreen";

// dashboard screens

// Profile Screens
import Profile from "../Views/Profile/Profile";
import CreditScreen from "../Views/Profile/CreditScreen";
import PersonalInfo from "../Views/Profile/PersonalInfo";
import SCard from "../Views/Profile/SCard";
import TransactionHistory from "../Views/Profile/TransactionHistory";
import Consent from "../Views/Profile/Consent";

import RankingScreen from "../Views/RankingSection/RankingScreen";
import TopRankingScreen from "../Views/RankingSection/TopRankingScreen";
import DashbordScreen from "../Views/DashbordScreen/DashbordScreen";

const Stack = createStackNavigator();
export default function MyStackNavig() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Profile Screens */}
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreditScreen"
          component={CreditScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PersonalInfo"
          component={PersonalInfo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SCard"
          component={SCard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TransactionHistory"
          component={TransactionHistory}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Consent"
          component={Consent}
          options={{ headerShown: false }}
        />
        {/*  Profile Screens */}

        <Stack.Screen
          name="DashbordScreen"
          component={DashbordScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SplashScreenSec"
          component={SplashScreenSec}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AuthSelection"
          component={AuthSelection}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WelcomScren"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OtpScreen"
          component={OtpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FailedScreen"
          component={FailedScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SuccessScreen"
          component={SuccessScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegistrationSuccess"
          component={RegistrationSuccess}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
          options={{ headerShown: false }}
        />
        {/*Ranking Screen */}
        <Stack.Screen
          name="RankingScreen"
          component={RankingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TopRankingScreen"
          component={TopRankingScreen}
          options={{ headerShown: false }}
        />
        {/*Ranking Screen */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
