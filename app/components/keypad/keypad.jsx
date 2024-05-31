import {
  View,
  Text,
  FlatList,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import DialPad from "./dialpad";
import Icon from "../icons/lucide";

const Keypad = () => {
  let keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, "bio", 0, ""];
  let [pins, setPins] = useState([]);

  return (
    <View className="items-center gap-y-10   ">
      <View className="items-center gap-y-1">
        <View className="flex-row items-center gap-x-1">
          <Icon name={"Lock"} size={15} color={"black"} />
          <Text className="font-pmedium text-base">Enter your pin</Text>
        </View>
        <View className="flex-row justify-center gap-3 ">
          {[...Array(4).keys()].map((item) => {
            let isSelected = pins[item] !== undefined;
            return (
              <Pressable
                onPress={() => {}}
                key={item}
                className={`w-3 h-3  rounded-full ${
                  isSelected ? "bg-gray-800" : "bg-gray-300"
                } `}
              ></Pressable>
            );
          })}
        </View>
      </View>
      <FlatList
        className="  mt-5  "
        keyExtractor={(index) => index}
        data={keys}
        renderItem={(item) => (
          <TouchableOpacity className="text-center ">
            <DialPad
              key={item}
              text={item.item}
              setPins={setPins}
              pins={pins}
            />
          </TouchableOpacity>
        )}
        numColumns={3}
        columnWrapperStyle={{
          alignItems: "center",
          gap: 20,
        }}
        contentContainerStyle={{
          gap: 40,
          alignItems: "center",
        }}
      />
      <View className="gap-y-3 items-center">
        <Text className="text-base font-pregular">Not your account?</Text>
        <Pressable>
          <Text className="text-center font-pmedium text-base p-3 px-10 bg-blue-50 rounded-full  text-primary">
            Sign Out
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Keypad;
