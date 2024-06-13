import React from "react";
import { Text, TouchableOpacity } from "react-native";

const CustomButton = ({
  title,
  handlePress,
  styles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      className={`bg-secondary rounded-xl justify-center items-center min-h-[62px]`}
    >
      <Text className="text-primary font-psemibold text-lg">CustomButton</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
