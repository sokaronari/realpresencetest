import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import JanuaryScreen from "../screens/history/JanuaryScreen";
import FebruaryScreen from "../screens/history/FebruaryScreen";
import MarchScreen from "../screens/history/MarchScreen";
import AprilScreen from "../screens/history/AprilScreen";
import MayScreen from "../screens/history/MayScreen";
import JuneScreen from "../screens/history/JuneScreen";
import JulyScreen from "../screens/history/JulyScreen";
import AugustScreen from "../screens/history/AugustScreen";
import SeptemberScreen from "../screens/history/SeptemberScreen";
import OctoberScreen from "../screens/history/OctoberScreen";
import NovemberScreen from "../screens/history/NovemberScreen";
import DecemberScreen from "../screens/history/DecemberScreen";
import HistoryScreen from "../screens/HistoryScreen";
const Stack = createStackNavigator();

const HistoryNavigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen
      name="History"
      component={HistoryScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="january"
      component={JanuaryScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="february"
      component={FebruaryScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="march"
      component={MarchScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="april"
      component={AprilScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="may"
      component={MayScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="june"
      component={JuneScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="july"
      component={JulyScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="august"
      component={AugustScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="september"
      component={SeptemberScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="october"
      component={OctoberScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="november"
      component={NovemberScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="december"
      component={DecemberScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default HistoryNavigator;
