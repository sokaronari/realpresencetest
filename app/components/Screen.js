import React from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import Constants from "expo-constants";

function Screen({
  children,
  paddingVertical,
  backgroundColor,
  paddingHorizontal,
  alignItems,
  justifyContent,
  paddingTop
}) {
  return (
    <SafeAreaView
      style={[
        styles.screen,
        { paddingVertical: paddingVertical },
        { backgroundColor: backgroundColor },
        { paddingHorizontal: paddingHorizontal },
        { alignItems: alignItems },
        { justifyContent: justifyContent },
        { paddingTop: paddingTop }
      ]}
    >
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1
  }
});
export default Screen;
