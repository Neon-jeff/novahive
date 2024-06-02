import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const IssuesRootNavigator = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="create-issue" />
    </Stack>
  );
};

export default IssuesRootNavigator;
