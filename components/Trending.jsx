import { View, Text, FlatList } from "react-native";
import React from "react";

const Trending = ({ posts }) => {
  return (
    <FlatList
      data={posts}
      horizontal
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
        <Text className="text-white text-3xl">{item.id}</Text>
      )}
    />
  );
};

export default Trending;
