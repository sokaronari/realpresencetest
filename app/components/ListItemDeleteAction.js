import React from 'react';
import {View, StyleSheet} from 'react-native';
import colors from '../config/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

function ListItemDeleteAction({onPress}) {
  return (
    <TouchableWithoutFeedback style={styles.deleteaction} onPress={onPress}>
      <MaterialCommunityIcons
        name="trash-can-outline"
        color="white"
        size={35}
      />
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  deleteaction: {
    flex: 1,
    backgroundColor: colors.red,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ListItemDeleteAction;
