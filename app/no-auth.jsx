import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "./components/buttons/button";
import { MotiView, MotiText } from "moti";
import { router } from "expo-router";
const NoAuth = () => {
  return (
    <SafeAreaView className="flex-1">
      <ImageBackground
        source={{
          uri: "https://images.pexels.com/photos/4467683/pexels-photo-4467683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }}
        className="flex-1"
        resizeMode="cover"
      >
        <View
          className=" absolute justify-end   top-0 bottom-0 left-0 right-0 "
          style={{ backgroundColor: "rgba(0,0,0,.5)" }}
        >
          <MotiView
            from={{ translateY: 200 }}
            animate={{ translateY: 0 }}
            transition={{ delay: 200, duration: 2000 }}
            className="bg-neutral-100  p-5 py-10 rounded-t-2xl justify-center"
            style={{ gap: 40, backgroundColor: "rgba(0,0,0,.5)" }}
          >
            <View className="gap-y-1">
              <MotiText
                from={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 500, duration: 1000 }}
                className="text-neutral-200 w-2/3 text-5xl leading-loose font-psemibold"
              >
                Discover Trending Remote Jobs{" "}
              </MotiText>
              <MotiText
                from={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 700, duration: 1000 }}
                className="text-neutral-400 font-pmedium text-lg "
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
                consequuntur iste eligendi
              </MotiText>
            </View>
            <View className=" " style={{ gap: 20 }}>
              <Button
                type="secondary"
                text={"Create Account"}
                style="w-full"
                action={() => {
                  router.push("/(register)/account-type");
                }}
              />
              <Button
                type="primary"
                text={"Login"}
                style="w-full"
                action={() => {
                  router.push("loginPassword");
                }}
              />
            </View>
          </MotiView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default NoAuth;
