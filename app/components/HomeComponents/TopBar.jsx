import { View, Text } from "react-native";
import React from "react";
import { Image } from "react-native";
import Icon from "../icons/lucide";
import { Link } from "expo-router";

const TopBar = () => {
  return (
    <View className="flex-row items-center justify-between ">
      <View className="flex-row items-center gap-x-4">
        <Image
          source={{
            uri: "https://images.pexels.com/photos/2010812/pexels-photo-2010812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          }}
          className="w-12 h-12 object-top rounded-full"
          resizeMode="cover"
        />
        <View className="">
          <Text className="text-lg text-primary font-pbold ">
            SweetCoco3030
          </Text>
          <Text className="text-base font-pregular">Video editor</Text>
          <View className="flex-row items-center mt-1 " style={{ gap: 2 }}>
            <Icon name={"Star"} color={"orange"} size={15} />
            <Text className="text-sm font-psemibold  ">
              3.5/<Text>5.0</Text>
            </Text>
          </View>
          {/* <Text>(Expert Level)</Text> */}
        </View>
      </View>
      <Link href={'(tabs)/home/notifications'}>
        <Icon name={"Bell"} color={"black"} size={20} />
      </Link>
    </View>
  );
};

export default TopBar;
