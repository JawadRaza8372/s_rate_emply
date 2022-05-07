import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import CustomBottomTab from "./CustomBottomTab";
import AuthScreen from "../Views/AuthScreen";
import CustomBottomTabAdmin from "./CustomBottomTabAdmin";
import AdminActivityScreen from "../Views/AdminActivityScreen";
import UpdateUserScreen from "../Views/UpdateUserScreen";
import MySubscription from "../Views/MySubscription";
import { useEffect } from "react";
import { db } from "../DataBase/Configer";
import { setUserActivity, setTasks } from "../store/projectSlice";
import { useDispatch } from "react-redux";
const Stack = createStackNavigator();
export default function MyStackNavig() {
  const dispatch = useDispatch();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Auth"
          component={AuthScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
