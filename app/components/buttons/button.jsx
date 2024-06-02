import { View, Text, Pressable } from "react-native";
import React from "react";

const Button = ({ type = "primary", action, style = "", text }) => {
  let HandleButtonTypeStyle = () => {
    
    switch (type) {
      case "primary":
       return " bg-primary  p-4 rounded-lg w-4/5";
      case "secondary":
        return "bg-blue-100 p-4 rounded-lg w-4/5";
      case "outline":
        return "border border-primary p-4 rounded-lg w-4/5";
    }

  };
  return (
    <Pressable
      className={`${HandleButtonTypeStyle()} ${style}`}
      onPress={() => {
        action();
      }}
    >
      <Text
        className={`${
          type !== "primary" ? "text-primary" : "text-white"
        } text-base font-pmedium text-center`}
      >
        {text}
      </Text>
    </Pressable>
  );
};

export default Button;
