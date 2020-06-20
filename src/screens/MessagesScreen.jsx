import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import ListItemDeleteActions from "../components/ListItemDeleteAction";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";
import ListItem from "../components/ListItems";

const initialMessages = [
  {
    id: 1,
    title: "First Text message",
    desc: "Message decscription",
    image: require("../asset/person1.jpeg"),
  },
  {
    id: 2,
    title: "Second Text message",
    desc: " Second Message decscription",
    image: require("../asset/person2.jpg"),
  },
  {
    id: 3,
    title: "Third Text message",
    desc: "Third Message decscription",
    image: require("../asset/person3.jpg"),
  },
];
function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.desc}
            image={item.image}
            onPress={() => console.log(item.id)}
            renderRightActions={() => (
              <ListItemDeleteActions onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 10,
              title: "Second Text message",
              desc: " Second Message decscription",
              image: require("../asset/person2.jpg"),
            },
            {
              id: 11,
              title: "Third Text message",
              desc: "Third Message decscription",
              image: require("../asset/person3.jpg"),
            },
            {
              id: 4,
              title: "Fourth Text message",
              desc: "Fourth Message decscription",
              image: require("../asset/person1.jpeg"),
            },
            {
              id: 5,
              title: "Fiveth Text message",
              desc: "Fiveth Message decscription",
              image: require("../asset/israel.jpeg"),
            },
            {
              id: 6,
              title: "Sixth Text message",
              desc: "Sixth Message decscription",
              image: require("../asset/person.png"),
            },
            {
              id: 7,
              title: "Seventh Text message",
              desc: "Seventh Message decscription",
              image: require("../asset/grey.jpeg"),
            },
            {
              id: 8,
              title: "Third Text message",
              desc: "Third Message decscription",
              image: require("../asset/person3.jpg"),
            },
            {
              id: 9,
              title: "Second Text message",
              desc: " Second Message decscription",
              image: require("../asset/person2.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

export default MessagesScreen;

const styles = StyleSheet.create({});
