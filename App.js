import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {DeviceEventEmitter} from 'react-native';
import AuthNavigator from './app/navigation/AuthNavigator';
import AppNavigator from './app/navigation/AppNavigator';
import AuthContext from './app/auth/context';

export default function App() {
  const [userData, setUserData] = useState();
  const [historyData, setHistoryData] = useState();

  return (
    <AuthContext.Provider
      value={{userData, setUserData, historyData, setHistoryData}}>
      <NavigationContainer>
        {userData ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
