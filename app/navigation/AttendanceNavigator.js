import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AttendanceScreen from "../screens/AttendanceScreen";
import AppPresence from "../components/AppPresence";
import AppUnpresence from "../components/AppUnpresence";

const Stack = createStackNavigator();
const AttendanceNavigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen
      name="Attendance"
      component={AttendanceScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="presenceQr"
      component={AppPresence}
      options={{ title: "check-in QR Code" }}
    />
    <Stack.Screen
      name="unpresenceQr"
      component={AppUnpresence}
      options={{ title: "Check-out QR Code" }}
    />
  </Stack.Navigator>
);
export default AttendanceNavigator;
