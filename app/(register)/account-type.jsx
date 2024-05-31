import { View, Text, Image, Pressable, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/buttons/button";
import Icon from "../components/icons/lucide";
import image from "../../assets/images/onboarding/account-type.png";
import { router } from "expo-router";
const AccountType = () => {
  let [IsFreelancer, SetIsFreelancer] = useState(null);
  return (
    <SafeAreaView
      className=" justify-center items-center flex-1 bg-white"
      style={{ gap: 40 }}
    >
      {/* illustration image */}
      <Image source={image} resizeMode="contain" className="w-full h-1/3" />
      <View>
        <Text className="text-2xl  font-psemibold text-primary">
          Select account type
        </Text>
      </View>
      <View className=" w-full items-center gap-y-5">
        <Pressable
          onPress={() => {
            SetIsFreelancer(false);
          }}
          className={`flex-row items-center  justify-center  py-3  w-3/5 ${
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
          className={`flex-row items-center  justify-center  py-3  w-3/5 ${
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
        action={() => {
          router.push("/(register)/connect-wallet");
        }}
      />
    </SafeAreaView>
  );
};

export default AccountType;
