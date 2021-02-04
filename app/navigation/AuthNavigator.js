import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import colors from "../config/colors";

const Stack = createStackNavigator();
const AuthNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      component={welcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Login"
      component={loginScreen}
      options={{
        title: "Back",
        headerStyle: {
          backgroundColor: colors.welcomeSecondary
        },
        headerTintColor: "#082D5F"
      }}
    />
    <Stack.Screen
      name="Sign Up"
      component={registerScreen}
      options={{
        title: "Back",
        headerStyle: {
          backgroundColor: colors.welcomeSecondary
        },
        headerTintColor: "#082D5F"
      }}
    />
  </Stack.Navigator>
);

const welcomeScreen = () => <WelcomeScreen />;
const loginScreen = () => <LoginScreen />;
const registerScreen = () => <RegisterScreen />;

export default AuthNavigation;
