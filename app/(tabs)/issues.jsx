import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Back from "../components/Navigators/Back";
import { Button } from "react-native";
import Icon from "../components/icons/lucide";
import { MotiView } from "moti";

const Issues = () => {
  let [buttonIndex, SetButtonIndex] = useState(0);
  let ButtonGroup = [
    {
      label: "Opened",
    },
    {
      label: "Resolved",
    },
    {
      label: "Closed",
    },
    {
      label: "Your Issues",
    },
  ];
  return (
    <SafeAreaView className="px-5 pt-10" style={{ gap: 17 }}>
      <Back path="home/home" />
      <Text className="text-2xl font-psemibold">Issues</Text>
      <Pressable
        className="flex-row items-center justify-center self-start  p-3 rounded-full bg-primary "
        style={{ gap: 5 }}
      >
        <Icon name={"CirclePlus"} size={20} color={"white"} strokeWidth={2.1} />
        <Text className="text-base text-white font-pmedium">Create Issue</Text>
      </Pressable>
      <View
        className="flex-row justify-between p-3 bg-sky-50 rounded-xl"
        style={{ gap: 10 }}
      >
        {ButtonGroup.map((item, index) => (
          <Pressable
            onPress={() => {
              SetButtonIndex(index);
            }}
            key={index}
          >
            <MotiView
              className={`${
                index === buttonIndex ? "bg-sky-500 rounded-md " : ""
              } p-3`}
              animate={{
                backgroundColor:
                  index == buttonIndex ? "#0ea5e9" : "transparent"
              }}
              transition={{
                duration: 300,
              }}
            >
              <Text className="text-base font-pmedium">{item.label}</Text>
            </MotiView>
          </Pressable>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Issues;
