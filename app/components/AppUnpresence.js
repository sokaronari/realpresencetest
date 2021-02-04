import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, Button, Alert} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {useNavigation} from '@react-navigation/core';
import AuthContext from '../auth/context';
import unpresenceApi from '../api/unpresence';

function AppUnpresence() {
  const navigation = useNavigation();
  const [scanned, setScanned] = useState(false);

  const {userData} = useContext(AuthContext);
  const AuthStr = 'Bearer '.concat(userData.data.access_token);

  const handleBarCodeScanned = async ({data}) => {
    setScanned(true);

    const result = await unpresenceApi.unpresence(data, AuthStr);
    if (!result.ok) {
      if (result.data.code === 400) {
        console.log(result.data);
        alert(
          'ERROR : Invalid QR Code, Scan again or contact your administrator',
        );
      } else if (result.data.code === 409) {
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
export default AppUnpresence;
