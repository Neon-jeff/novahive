import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import Icon from "../icons/lucide";

const IssuesCard = ({ summary, username, status, votes, img }) => {
  return (
    <View
      className=" border-neutral-100 border p-5 rounded-2xl mt-5"
      style={{ gap: 15 }}
    >
      <View className="absolute right-4 top-4 flex-row items-center gap-x-1">
        <Icon name={"Clock"} size={15} color={"grey"} />
        <Text className=" font-psemibold text-sm text-neutral-500 ">
          20m ago
        </Text>
      </View>
      <View className=" self-start  gap-x-3">
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/75.jpg" }}
          className="w-16 rounded-full h-16"
          resizeMode="cover"
        />
        <Text className="font-psemibold text-neutral-600 text-base">
          #mashedpototo
        </Text>
      </View>
      <Text className="font-pregular">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        dignissimos quisquam. Iusto illum placeat cupiditate sequi, laboriosam
        corrupti praesentium minima?
      </Text>
      <View className="flex-row self-end items-center" style={{ gap: 20 }}>
        <View className="flex-row items-end gap-x-1 p-2 px-3 bg-sky-50 rounded-full">
          <Icon
            name={"ThumbsUp"}
            size={20}
            color={"rgb(2 132 199)"}
            strokeWidth={3}
          />
          <Text className="font-pbold text-sky-600 text-base "> 200</Text>
        </View>
        {/* <Pressable className='bg-sky-600 p-3 rounded-md'>
          <Text className="font-pregular text-white">Add Vote</Text>
        </Pressable> */}
      </View>
    </View>
  );
};

export default IssuesCard;
