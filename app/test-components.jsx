import { View, Text } from "react-native";
import React, { useState } from "react";
import JobCards from "./components/cards/JobCards";
import Keypad from "./components/keypad/keypad";
import { SafeAreaView } from "react-native-safe-area-context";

const TestComponets = () => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center gap-y-5 px-5  bg-white">
      <Text className="text-2xl font-psemibold">Test Components</Text>
      <View className="w-full">
        {/* <JobCards
          job_title={"Backend Developer"}
          company={"Steels and Iron"}
          job_type={"Part-time/Remote"}
          experience_level={"Intermediate Level"}
        /> */}
        <Keypad />
      </View>
    </SafeAreaView>
  );
};

export default TestComponets;
