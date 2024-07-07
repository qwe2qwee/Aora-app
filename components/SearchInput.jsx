import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";

import { icons } from "../constants";

const SearchInput = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShoPassword] = useState(false);
  return (
    <View className=" border-2 border-black-200 w-full h-16 flex-row px-4 rounded-2xl bg-black-100 focus:border-secondary items-center">
      <TextInput
        className=" flex-1 text-white font-pregular text-base mt-0.5 pr-2"
        value={value}
        placeholder="ابحث عن الفيديوهات"
        placeholderTextColor="#7b7b8b"
        onChangeText={handleChangeText}
        secureTextEntry={title === "Password" && !showPassword}
      />

      <TouchableOpacity>
        <Image
          source={icons.search}
          className=" w-5 h-5"
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
