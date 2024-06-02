import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Keypad from "./components/keypad/keypad";

const Login = () => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center gap-y-10 px-5  bg-white">
      <View className="items-center gap-y-2">
        <View className="w-24 h-24 justify-center rounded-full border-2 border-neutral-100 items-center   ">
          <Image
            source={{
              uri: "https://images.pexels.com/photos/15102535/pexels-photo-15102535/free-photo-of-close-up-photo-of-woman-wearing-gray-sweater.jpeg?auto=compress&cs=tinysrgb&w=600",
            }}
            resizeMode="cover"
            className="w-20 h-20 rounded-full "
          />
        </View>
        <View className="items-center gap-y-1">
          <Text className="font-pbold text-2xl">Welcome Back</Text>
          <Text className="font-pmedium text-lg">#SweetPea3030</Text>
        </View>
      </View>
      <View className="w-full">
        <Keypad />
      </View>
    </SafeAreaView>
  );
};

export default Login;
