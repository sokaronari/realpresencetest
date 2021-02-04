import React, { useState } from "react";
import { FlatList, View } from "react-native";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import colors from "../config/colors";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "title 1",
    description: "description 1",
    image: require("../assets/spongebob.jpg")
  },

  {
    id: 2,
    title: "title 2",
    description: "description 2",
    image: require("../assets/spongebob.jpg")
  }
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = message => {
    setMessages(messages.filter(m => m.id !== message.id));
  };
  return (
    <Screen>
      <View style={{ marginHorizontal: 5, backgroundColor: colors.greylight }}>
        <FlatList
          data={messages}
          keyExtractor={message => message.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              showChevron="chevron-right"
              title={item.title}
              subtitle={item.description}
              image={item.image}
              onPress={() => console.log("message clicked!", item)}
              renderRightActions={() => (
                <ListItemDeleteAction onPress={() => handleDelete(item)} />
              )}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
          refreshing={refreshing}
          onRefresh={() => {
            setMessages([
              {
                id: 2,
                title: "title 2",
                description: "description 2",
                image: require("../assets/spongebob.jpg")
              }
            ]);
          }}
        />
      </View>
    </Screen>
  );
}

export default MessagesScreen;
