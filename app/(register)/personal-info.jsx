import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Field from "../components/fieldsets/fields";
import { router } from "expo-router";
import Icon from "../components/icons/lucide";
import Button from "../components/buttons/button";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";
import Checkbox from "expo-checkbox";

const PersonalInfo = () => {
  let [checkBox, setCheckBox] = useState(false);
  let [image, setImage] = useState(null);
  let uploadImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <SafeAreaView className="px-5 bg-white   gap-y-5  flex-1">
      <ScrollView contentContainerStyle={{ paddingTop: 10 }} showsVerticalScrollIndicator={false}>
        {/* <Image source={image} resizeMode="contain" className="w-full h-1/3" /> */}
        <View className="  gap-y-5 ">
          <Pressable
            onPress={() => {
              router.push("(register)/create-pin");
            }}
            className="w-10 h-10 rounded-full bg-neutral-100 flex-row items-center justify-center  "
          >
            <Icon name={"ChevronLeft"} size={25} color={"black"} />
          </Pressable>
          <Text className=" text-2xl  font-psemibold">
            Personal Information
          </Text>
        </View>
        <View className=" " style={{ gap: 20 }}>
          <View className="gap-y-2">
            <View className="bg-neutral-100 w-14 h-14 self-center rounded-full justify-center items-center">
              {image ? (
                <Image
                  source={{ uri: image }}
                  resizeMode="cover"
                  className="w-14 h-14 rounded-full"
                />
              ) : (
                <Icon name={"UserRound"} size={25} color={"#0A2647"} />
              )}
            </View>
            <Pressable
              onPress={uploadImage}
              className="self-center flex-row gap-x-1"
            >
              <Icon name={"ImagePlus"} size={15} color={"#0A2647"} />
              <Text className="font-pregular">Upload profile image</Text>
            </Pressable>
          </View>
          <Field label={"Nickname"} />
          <Field label={"Email Address"} />
          <Field label={"Skill"} />
          <Field label={"Location"} />
          <View className="flex-row items-center gap-x-2">
            <Checkbox
              value={checkBox}
              onValueChange={() => {
                setCheckBox(!checkBox);
              }}
              color={"rgb(96 165 250)"}
              className="rounded-lg border-blue-400"
            />
            <Text className="font-pregular text-base">
              I accept the{" "}
              <Text className="text-blue-500 underline">
                Terms and Conditions
              </Text>
            </Text>
          </View>
        </View>
        <View className=" w-full  items-center">
          <Button
            style="mt-4"
            text={"Create Account  "}
            action={() => {
              router.push("login");
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PersonalInfo;
