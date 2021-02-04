import React, {useState, useContext, useEffect} from 'react';
import {StyleSheet, View, DeviceEventEmitter} from 'react-native';
import colors from '../config/colors';
import SquareButton from '../components/SquareButton';
import {useNavigation} from '@react-navigation/core';
//import Beacons from 'react-native-beacons-manager';

function PresenceScreen() {
  const [isMounted, setIsMounted] = useState(false);
  // const getIBeaconsData = async () => {
  //   Beacons.detectIBeacons();

  //   // Start detecting all iBeacons in the nearby
  //   try {
  //     await Beacons.startMonitoringForRegion({identifier: 'region'});
  //     console.log(`Beacons monitoring started succesfully!`);
  //   } catch (error) {
  //     console.log(`Beacons monitoring not started, error: ${error}`);
  //   }

  //   // Print a log of the detected iBeacons (1 per second)
  //   DeviceEventEmitter.addListener('beaconsDidRange', data => {
  //     console.log('sampe sini');
  //     console.log('Found beacons!', data);
  //   });
  //   // console.log('getibeaconsdata');
  //   // // Tells the library to detect iBeacons
  //   // Beacons.detectIBeacons();

  //   // // Start detecting all iBeacons in the nearby
  //   // const result = await Beacons.startRangingBeaconsInRegion('WGX_Ibeacon');
  //   // if (!result.ok)return console.log(`Beacons ranging not started, error: ${result}`);

  //   // console.log(`Beacons ranging started succesfully!`);
  //   // DeviceEventEmitter.addListener('beaconsDidRange', data => {
  //   //   console.log('Found beacons!', data.beacons);
  //   // });
  // };

  // useEffect(() => {
  //   getIBeaconsData();
  // }, []);

  const navigation = useNavigation();
  return (
    <View
      style={{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: colors.welcomeSecondary,
      }}>
      <View
        style={{
          paddingHorizontal: 5,
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <SquareButton
          buttonText="checking-in"
          textColor={colors.welcomePrimary}
          backgroundColor={colors.white}
          onPress={() => navigation.navigate('presenceQr')}
        />
        <SquareButton
          buttonText="checking-out"
          textColor={colors.white}
          backgroundColor={colors.welcomePrimary}
          onPress={() => navigation.navigate('unpresenceQr')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    width: 350,
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {color: colors.white, fontSize: 20, fontWeight: '100'},
});
export default PresenceScreen;
