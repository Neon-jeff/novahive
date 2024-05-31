import { View, Text } from "react-native";
import React from "react";
import Icon from "../icons/lucide";

const NotificationsCard = ({ type, read = false, message, date, title }) => {
  let IconNameType = () => {
    if (type == "job_alert") {
      return "BriefcaseBusiness";
    }
    if (type == "deposit") {
      return "Banknote";
    }
    if (type == "issue") {
      return "BadgeAlert";
    }
  };
  return (
    <View
      className={`flex-row items-center  rounded-lg  ${
        !read ? "bg-sky-50" : ""
      }`}
      style={{gap:20,padding:20}}
    >
      <View className="p-1 rounded-lg bg-sky-200">
        <Icon
          name={IconNameType()}
          size={25}
          color={"black"}
          strokeWidth={1.5}
        />
      </View>
      <View className='w-3/4'>
        <Text className="text-base font-pbold">{title}</Text>
        <Text className='font-pregular text-sm'>{message}</Text>
      </View>
      {!read ? <View className="w-2 h-2 rounded-full bg-primary"></View> : null}
    </View>
  );
};

export default NotificationsCard;
