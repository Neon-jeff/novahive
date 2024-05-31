import { View, Text } from "react-native";
import React from "react";
import { Redirect } from "expo-router";

const RedirectOnboarding = () => {
  return <Redirect href={"/(onboarding)/screen-1"} />;
};

export default RedirectOnboarding;
