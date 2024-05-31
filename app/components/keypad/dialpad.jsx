import { View, Text, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "../icons/lucide";

const DialPad = ({ text, action = () => {}, setPins, pins }) => {
  if (text === "") {
    return (
      <TouchableOpacity
        className="justify-center items-center w-24 "
        onPress={() => {
          setPins(pins.slice(0, -1));
        }}
      >
        <Text className="text-lg text-center  font-pmedium text-red-500">
          delete
        </Text>
      </TouchableOpacity>
    );
  }
  if (text === "bio") {
    return (
      <TouchableOpacity className="w-24 items-center">
        <Icon name={"Fingerprint"} size={30} color={"black"} />
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      className="  rounded-full items-center w-24 justify-center"
      onPress={() => {
        if (pins.length == 4) {
          return;
        }
        setPins([...pins, text]);
      }}
    >
      <Text className="font-psemibold text-2xl ">{text}</Text>
    </TouchableOpacity>
  );
};

export default DialPad;
