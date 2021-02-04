import React, {useContext, useState} from 'react';
import {View, StyleSheet, Alert, Button} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import AuthContext from '../auth/context';
import presenceApi from '../api/presence';
import {useNavigation} from '@react-navigation/core';

function AppPresence() {
  const navigation = useNavigation();

  const [scanned, setScanned] = useState(false);
  const {userData} = useContext(AuthContext);
  const AuthStr = 'Bearer '.concat(userData.data.access_token);

  const handleBarCodeScanned = async ({data}) => {
    setScanned(true);
    // Linking.openURL(data);
    const result = await presenceApi.presence(data, AuthStr);
    if (!result.ok) {
      if (result.data.code === 400)
        alert(
          'ERROR : Invalid QR Code, Scan again or contact your administrator',
        );
      else if (result.data.code === 409) {
        console.log(result.data);
        alert('ERROR : Your data already recorded (duplicate data) ');
        navigation.navigate('Attendance');
      }
    }

    if (result.status == 200) {
      alert('Your data successfully recorded! ');
      navigation.navigate('Attendance');
    }
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
      <QRCodeScanner
        onRead={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />
      )}
    </View>
  );
}
export default AppPresence;
