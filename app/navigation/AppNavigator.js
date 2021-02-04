import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import colors from '../config/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AccountScreen from '../screens/AccountScreen';
import AppCalendar from '../components/AppCalendar';
import AttendanceScreen from '../screens/AttendanceScreen';
import AttendanceNavigator from '../navigation/AttendanceNavigator';
import AccountNavigator from '../navigation/AccountNavigator';

const Tab = createBottomTabNavigator();
const AppNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: 'white',
      activeTintColor: 'tomato',
      inactiveTintColor: colors.greytext,
    }}>
    <Tab.Screen
      name="Account"
      component={AccountNavigator}
      options={{
        title: 'Home',
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Attendance"
      component={AttendanceNavigator}
      options={{
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons
            name="account-check"
            size={size}
            color={color}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Calendar"
      component={AppCalendar}
      options={{
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="calendar" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
