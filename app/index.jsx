import { View, Text } from "react-native";
import React from "react";
import { Redirect } from "expo-router";
import { GetValue } from "../local/localStore";
const RedirectOnboarding = () => {
  if (GetValue("onboardingComplete") == "true") {
    return <Redirect href={"loginPassword"} />;
  }
  return <Redirect href={"/(onboarding)/screen-1"} />;
};

export default RedirectOnboarding;
