import React from "react";
import { Text } from "react-native";
import defaultStyles from "../config/styles";

function AppText({ children, color, flex, textAlign, marginTop }) {
  return (
    <Text
      style={[
        defaultStyles.text,
        { color: color },
        { flex: flex },
        { textAlign: textAlign },
        { marginTop: marginTop },
        { fontSize: 12 }
      ]}
    >
      {children}
    </Text>
  );
}

export default AppText;
