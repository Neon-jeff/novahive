import { View, Text, Pressable } from "react-native";
import React from "react";

const Button = ({ type, action, style = "", text }) => {
  let HandleButtonTypeStyle = () => {
    let buttonDefaultStyle = "";
    switch (type) {
      case "primary":
        buttonDefaultStyle = "primary_button_style";
      case "secondary":
        buttonDefaultStyle = "secondary_button_style";
      case "outline":
        buttonDefaultStyle = "outline_button_style";
    }
  };
  return (
    <Pressable
      className={`w-2/3 bg-primary p-4 rounded-2xl ${style}`}
      onPress={() => {
        action();
      }}
    >
      <Text className="text-white text-base font-pmedium text-center">
        {text}
      </Text>
    </Pressable>
  );
};

export default Button;
