import React from 'react';
import {StyleSheet, Text, View, TextInput, Platform} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../config/colors';
import defaultStyles from '../config/styles';

function AppTextInput({icon, width, ...otherProps}) {
  return (
    <View style={[styles.container, {width: width}]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color="#9CB5DA"
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={colors.placeholder}
        style={defaultStyles.text}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#9CB5DA',
    width: '100%',
    flexDirection: 'row',
    padding: 10,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
});
export default AppTextInput;
