import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import ListItem from "./ListItem";
import ListItemSeparator from "./ListItemSeparator";
import colors from "../config/colors";
import Icon from "./Icon";
import { useNavigation } from "@react-navigation/core";
import lists from "../config/lists";

function AccountList({ onPress }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <FlatList
        data={lists}
        keyExtractor={list => list.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            marginLeft={10}
            title={item.title}
            fontSize={16}
            onPress={() => navigation.navigate(item.targetScreen)}
            imageComponent={<Icon name={item.icon} color={item.color} />}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.greytext,
    width: "100%",
    marginTop: 10
  }
});

export default AccountList;
