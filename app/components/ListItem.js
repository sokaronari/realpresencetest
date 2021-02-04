import React from 'react';
import {StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
import defaultStyles from '../config/styles';
import colors from '../config/colors';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
function ListItem({
  image,
  title,
  subtitle,
  onPress,
  renderRightActions,
  imageComponent,
  showChevron,
  fontSize,
  alignItems,
  marginLeft,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor="orange" onPress={onPress}>
        <View style={[styles.container]}>
          {imageComponent}
          {image && <Image style={styles.image} source={image} />}
          <View
            style={[
              styles.textcontainer,
              {alignItems: alignItems},
              {marginLeft: marginLeft},
            ]}>
            <Text
              numberOfLines={1}
              style={[styles.title, {fontSize: fontSize}]}>
              {title}
            </Text>
            {subtitle && (
              <Text numberOfLines={3} style={styles.subtitle}>
                {subtitle}
              </Text>
            )}
          </View>
          {showChevron && (
            <MaterialCommunityIcons
              name={showChevron}
              size={25}
              color={defaultStyles.colors.greytext}
            />
          )}
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
    backgroundColor: colors.white,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.grey,
  },
  subtitle: {
    fontSize: 14,
    color: colors.greytext,
  },
  textcontainer: {
    justifyContent: 'center',
    flex: 1,
  },
});

export default ListItem;
