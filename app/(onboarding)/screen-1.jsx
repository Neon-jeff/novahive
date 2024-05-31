import {
  View,
  Text,
  Image,
  Pressable,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import image1 from "../../assets/images/onboarding/screen-2.png";
import image2 from "../../assets/images/onboarding/screen-1.png";
import image3 from "../../assets/images/onboarding/screen-3.png";
import { Dimensions } from "react-native";
import LucideIcon from "../components/icons/lucide";
import { router } from "expo-router";
import { MotiView, MotiImage } from "moti";
import OnBoardingScreenItem from "./OnBoardingScreenItem";
import { Link } from "expo-router";

const OnboardingScreenOne = () => {
  let [index, SetIndex] = useState(0);
  let ref = useRef(null);
  useEffect(() => {
    ref.current.scrollToIndex({
      animated: true,
      index: index,
      viewPosition: 0.5,
    });
  }, [index]);
  const data = [
    {
      headText: "JOIN",
      subText: "Join the Hive, revolutionize freelancing dynamic",
      image: image1,
    },
    {
      headText: "EMPOWER",
      subText: "Empower your workforce, Embrace Decentralization",
      image: image2,
    },
    {
      headText: "CONNECT",
      subText: "Your Gateway to Decentralized Freelancing Excellence",
      image: image3,
    },
  ];

  return (
    <SafeAreaView className="flex-1  justify-center  w-full  bg-white">
      <FlatList
        ref={ref}
        className="  "
        contentContainerStyle={{ justifyContent: "center" }}
        showsHorizontalScrollIndicator={false}
        data={data}
        scrollEnabled={false}
        horizontal
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => (
          <OnBoardingScreenItem
            headtext={item.headText}
            subtext={item.subText}
            image={item.image}
          />
        )}
      />
      <View className="absolute left-0 right-0 bottom-5   gap-y-5 rounded-t-3xl">
        {/* button and paginator view */}
        <View className="w-full items-center gap-y-6">
          <View className="flex-row gap-x-3">
            {[...Array(3).keys()].map((item) => (
              <MotiView
                animate={{
                  width: item == index ? 16 : 8,
                  backgroundColor: item == index ? "#0A2647" : "#DBEAFE",
                }}
                transition={{ duration: 500 }}
                key={item}
                className={` h-2  rounded-full`}
              ></MotiView>
            ))}
          </View>
          <Pressable
            className={`bg-primary ${
              index == 2 ? "w-1/2" : "w-1/4"
            } p-4 items-center rounded-full`}
            onPress={() => {
              if (index == 2) {
                router.push("/(register)/account-type");
                return;
              }
              SetIndex(index + 1);
            }}
          >
            {index == 2 ? (
              <Text className="text-white text-center  font-pmedium text-lg">
                Get Started
              </Text>
            ) : (
              <LucideIcon name={"ArrowRight"} color={"white"} />
            )}
          </Pressable>
        </View>
      </View>
      <Link href={"(tabs)/home/home"} asChild>
        <Pressable className="absolute right-5 top-16 px-5 py-2 rounded-full bg-blue-100">
          <Text className="font-psemibold text-lg text-primary">Skip</Text>
        </Pressable>
      </Link>
    </SafeAreaView>
  );
};

export default OnboardingScreenOne;
