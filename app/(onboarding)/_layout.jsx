import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const OnboardingLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="screen-1"
        options={{ headerShown: false, animation: "slide_from_right" }}
      />
    </Stack>
  );
};

export default OnboardingLayout;
