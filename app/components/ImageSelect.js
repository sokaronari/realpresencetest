import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

function ImageSelect({ source }) {
  return <Image source={source} style={styles.imagecontainer} />;
}

const styles = StyleSheet.create({
  imagecontainer: {
    width: 250,
    height: 250,
    borderRadius: 20,
    marginRight: 10
  }
});

export default ImageSelect();
