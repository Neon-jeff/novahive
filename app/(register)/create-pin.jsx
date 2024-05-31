import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Field from "../components/fieldsets/fields";
import { router } from "expo-router";
import Icon from "../components/icons/lucide";
import Button from "../components/buttons/button";
import { SafeAreaView } from "react-native-safe-area-context";
import image from "../../assets/images/onboarding/create-pin.png";

const CreatePin = () => {
  return (
    <SafeAreaView className="px-5 bg-white py-5  gap-y-5  flex-1">
      <TouchableOpacity
        onPress={() => {
          router.push("(register)/create-pin");
        }}
        className="px-2 py-2  rounded-full bg-neutral-100 flex-row items-center justify-center  self-start"
      >
        <Icon name={"ChevronLeft"} size={25} color={"black"} />
      </TouchableOpacity>
      <Image source={image} resizeMode="contain" className="w-full h-1/3" />
      <View className="self-start gap-y-1">
        <Text className="self-start text-2xl   font-psemibold">Create Pin</Text>
        <Text className="font-pregular text-lg">
          Create your four digit pin
        </Text>
      </View>
      <View className=" " style={{ gap: 20 }}>
        <Field
          label={"Enter Pin"}
          isHidden={true}
          isNumber={true}
          maxLength={4}
        />
        <Field
          label={"Confirm Pin"}
          isHidden={true}
          isNumber={true}
          maxLength={4}
        />
      </View>
      <View className=" w-full  items-center">
        <Button
          style=""
          text={"Create Pin "}
          action={() => {
            router.push("(register)/personal-info");
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default CreatePin;
