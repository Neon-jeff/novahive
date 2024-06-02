import { View, Text, Pressable,ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Back from "../../components/Navigators/Back";
import { Button } from "react-native";
import Icon from "../../components/icons/lucide";
import { MotiView } from "moti";
import IssuesCard from "../../components/cards/IssuesCard";
import {Link, router} from 'expo-router'


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
    <SafeAreaView className="px-5 pt-10 flex-1 bg-white" style={{ gap: 17 }}>
      <ScrollView
        contentContainerStyle={{ gap: 10, paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <Back path="home/" />
        <Text className="text-2xl font-psemibold">Issues</Text>
        {/* <Pressable
        className="flex-row items-center justify-center self-start  p-3 rounded-full bg-primary "
        style={{ gap: 5 }}
      >
        <Icon name={"CirclePlus"} size={15} color={"white"} strokeWidth={2.1} />
        <Text className="text-sm text-white font-pmedium">Create Issue</Text>
      </Pressable> */}
        <View
          className="flex-row justify-between p-2 bg-sky-50 rounded-xl"
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
                    index == buttonIndex ? "#0ea5e9" : "transparent",
                }}
                transition={{
                  duration: 300,
                }}
              >
                <Text className="text-sm font-pmedium">{item.label}</Text>
              </MotiView>
            </Pressable>
          ))}
        </View>
        <IssuesCard img={16} />
        <IssuesCard img={18} />
        <IssuesCard img={33} />
        <IssuesCard img={38} />
      </ScrollView>
      <Pressable
        onPress={() => {
          router.push("issues/create-issue");
        }}
        className="w-14 h-14 absolute right-4 z-10 bottom-10 bg-primary rounded-full items-center justify-center"
      >
        <Icon name={"PencilLine"} size={25} color={"white"} strokeWidth={1.8} />
      </Pressable>
    </SafeAreaView>
  );
};

export default Issues;
