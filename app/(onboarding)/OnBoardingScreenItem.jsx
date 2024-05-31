import { View, Text, Image } from "react-native";
import React from "react";

const OnBoardingScreenItem = ({ image, headtext, subtext }) => {
  return (
    <View className="gap-y-10 w-screen justify-center items-center">
      <Image source={image} resizeMode="contain" className="h-1/3 w-11/12 " />
      <View className="w-4/5 gap-5">
        <Text className="text-center text-4xl font-psemibold">{headtext}</Text>
        <Text className="text-center text-lg font-pregular">{subtext}</Text>
      </View>
    </View>
  );
};

export default OnBoardingScreenItem;
