import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../screens/AccountScreen";
import MessagesScreen from "../screens/MessagesScreen";
import RemindersScreen from "../screens/RemindersScreen";
import AppointmentsScreen from "../screens/AppointmentsScreen";

import HistoryScreen from "../screens/HistoryScreen";
import HistoryNavigator from "./HistoryNavigator";
const Stack = createStackNavigator();
const AccountNavigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen
      name="Account"
      component={AccountScreen}
      options={{ headerShown: false }}
    />

    <Stack.Screen name="Messages" component={MessagesScreen} />
    <Stack.Screen
      name="Reminders"
      component={RemindersScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Appointments"
      component={AppointmentsScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="History"
      component={HistoryNavigator}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
export default AccountNavigator;
