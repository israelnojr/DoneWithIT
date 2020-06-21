import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import ListItemDeleteActions from "../components/ListItemDeleteAction";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";
import ListItem from "../components/ListItems";

const initialMessages = [
  {
    id: 1,
    title: "First Text message",
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
