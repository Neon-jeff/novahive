import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import LucideIcon from "../icons/lucide";

const Field = ({
  isHidden = false,
  onChange = () => {},
  placeholder,
  label,
  maxLength,
  isNumber=false
}) => {
  const [togglePassword, SetTogglePassword] = useState(isHidden);
  return (
    <View className="gap-y-2 ">
      {label && <Text className="text-lg font-pmedium  ">{label}</Text>}
      <View className="w-full flex-row items-center bg-neutral-50 border border-neutral-400  p-3 px-4 rounded-xl">
        <TextInput
          keyboardType={isNumber ? "numeric" : "ascii-capable"}
          className="w-full text-base  font-plight"
          secureTextEntry={togglePassword}
          placeholder={placeholder}
          maxLength={maxLength ? maxLength : 30}
          onChange={(e) => {
            onChange();
          }}
        ></TextInput>
        {isHidden && (
          <Pressable
            onPress={() => {
              SetTogglePassword(!togglePassword);
            }}
            className=" right-5  "
          >
            <LucideIcon name={"Eye"} color={"black"} size={20} />
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default Field;
