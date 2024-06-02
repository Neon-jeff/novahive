import { View, Text } from "react-native";
import React from "react";
import { Redirect } from "expo-router";

const RedirectOnboarding = () => {
  return <Redirect href={"/no-auth"} />;
};

export default RedirectOnboarding;
