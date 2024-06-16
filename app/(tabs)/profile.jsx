import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomButton from "../../components/CustomButton";
import { signOut } from "../../lib/appwrite";

const Profile = () => {
  return (
    <View>
      <Text>Profile</Text>
      <CustomButton handlePress={signOut} title={"log"} />
    </View>
  );
};

export default Profile;
