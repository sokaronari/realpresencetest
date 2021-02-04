import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import colors from '../config/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function ProfilePicture({onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{alignItems: 'center'}}>
        <View style={styles.iconcontainer}>
          <MaterialCommunityIcons name="camera" size={50} color="white" />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  imagecontainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: 5,
    borderColor: colors.white,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 75,
  },
  iconcontainer: {
    backgroundColor: colors.placeholder,
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: 5,
    borderColor: colors.white,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 75,
  },
});
export default ProfilePicture;
