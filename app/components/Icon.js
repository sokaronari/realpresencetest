import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function Icon({name, color}) {
  return (
    <View style={[styles.iconcontainer, {backgroundColor: color}]}>
      <MaterialCommunityIcons name={name} size={25} color="white" />
    </View>
  );
}
const styles = StyleSheet.create({
  iconcontainer: {
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Icon;
