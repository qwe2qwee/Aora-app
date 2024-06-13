import { View, Text, StatusBar, ScrollView, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";

export default function _layout() {
  return (
    <SafeAreaView className="bg-primary h-full bg-">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-full h-full justify-center items-center px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />
          <View className="">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless Possibilities with{" "}
              <Text className=" text-secondary-200">Aora</Text>
            </Text>
            <Image
              source={images.path}
              resizeMode="contain"
              className=" w-[180] h-[15px] absolute -bottom-2 -right-9 "
            />
          </View>
          <Text className=" text-sm font-pregular text-gray-100 mt-7 text-center">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>
          <CustomButton
            title="Continue with Email"
            handlePress={() => {}}
            styles=""
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
