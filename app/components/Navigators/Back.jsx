import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { router } from "expo-router";
import Icon from "../icons/lucide";

const Back = ({ path = "" }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        router.push(path);
      }}
      className="px-2 py-2  rounded-full bg-neutral-100 flex-row items-center justify-center  self-start"
    >
      <Icon name={"ChevronLeft"} size={25} color={"black"} strokeWidth={1.8} />
    </TouchableOpacity>
  );
};

export default Back;
