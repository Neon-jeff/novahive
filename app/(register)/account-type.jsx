import { View, Text, Image, Pressable, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/buttons/button";
import Icon from "../components/icons/lucide";
import image from "../../assets/images/onboarding/account-type.png";
import { router } from "expo-router";
const AccountType = () => {
  let [IsFreelancer, SetIsFreelancer] = useState(false);
  return (
    <SafeAreaView
      className=" justify-center items-center flex-1 bg-white"
      style={{ gap: 40 }}
    >
      {/* illustration image */}
      <Image source={image} resizeMode="contain" className="w-full h-1/3" />
      <View className="w-4/5 ">
        <Text className="text-2xl text-center font-psemibold text-primary">
          Select account type
        </Text>
        <Text className="text-center pt-4 text-base font-pregular">
          You can register to find freelance jobs or hire amazing talents from
          our platform
        </Text>
      </View>
      <View className=" flex-row justify-center  w-full items-center gap-x-5">
        <Pressable
          onPress={() => {
            SetIsFreelancer(false);
          }}
          className={`flex-row items-center  justify-center  py-3 w-1/3  ${
            IsFreelancer === false ? "bg-cyan-100" : "bg-gray-50"
          } rounded-lg`}
        >
          <View
            className={`h-4 w-4 absolute left-2 rounded-full border-2 border-primary ${
              IsFreelancer === false ? "bg-cyan-500" : ""
            }`}
          ></View>
          <Text className="font-pregular text-lg text-center text-primary">
            Hire Talents
          </Text>
        </Pressable>

        <Pressable
          onPress={() => {
            SetIsFreelancer(true);
          }}
          className={`flex-row items-center  justify-center  py-3  w-1/3 ${
            IsFreelancer === true ? "bg-cyan-100" : "bg-gray-50"
          } rounded-lg`}
        >
          <View
            className={`h-4 w-4 absolute left-2 rounded-full border-2 border-primary ${
              IsFreelancer === true ? "bg-cyan-400" : ""
            }`}
          ></View>
          <Text className="font-pregular text-lg text-center text-primary">
            Freelancer
          </Text>
        </Pressable>
      </View>
      <Button
        text={"Continue"}
        style="absolute bottom-10"
        action={() => {
          router.push("/(register)/connect-wallet");
        }}
      />
    </SafeAreaView>
  );
};

export default AccountType;
