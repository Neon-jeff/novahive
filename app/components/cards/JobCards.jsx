import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import Icon from "../icons/lucide";

const JobCards = ({
  job_title,
  company,
  wage,
  experience_level,
  job_type,
  job_description,
}) => {
  return (
    <View
      className=" bg-white border border-neutral-100  py-5 px-5  rounded-2xl"
      style={{ gap: 20 }}
    >
      {/* top section */}
      <View className="flex-row justify-between">
        <View className="flex-row gap-x-2 items-center">
          <View className='p-2 bg-sky-100 rounded-lg'>
            <Icon
              name={"BriefcaseBusiness"}
              size={20}
              color={"#267DD8"}
              strokeWidth={2.1}
            />
          </View>
          <View>
            <Text className="text-lg  font-pmedium">{job_title}</Text>
            <Text className="font-plight text-base text-primary">
              {company}
            </Text>
          </View>
        </View>
        <Text className="text-lg text-neutral-700 font-psemibold">${wage}</Text>
      </View>
      <Text className="font-pregular">{job_description}</Text>
      {/* bottom section */}
      <View className="flex-row justify-between ">
        <View className="gap-y-2">
          <Text className="text-base font-pregular">{job_type}</Text>
          <View className="flex-row items-center gap-x-1">
            <Icon name={"Star"} size={14} color={"orange"} />
            <Text className=" text-sm  text-primary font-psemibold rounded-full text-center">
              {experience_level}
            </Text>
          </View>
        </View>
        <Pressable className="px-5 pb-3 pt-2 items-center justify-center bottom-0 bg-primary  absolute right-0 rounded-full">
          <Text className="font-plight text-base text-white">Apply</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default JobCards;
