import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const RegisterLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="account-type" options={{ headerShown: false }} />
      <Stack.Screen name="connect-wallet" options={{ headerShown: false }} />
      <Stack.Screen name="create-pin" options={{ headerShown: false }} />
      <Stack.Screen name="personal-info" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RegisterLayout;
