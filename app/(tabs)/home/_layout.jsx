import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const HomeRootNavigator = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="home" />
      <Stack.Screen name="notifications" />
    </Stack>
  );
};

export default HomeRootNavigator;
