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
      {label && <Text className="text-base font-pmedium  ">{label}</Text>}
      <View className="w-full flex-row items-center bg-neutral-50 border border-neutral-200  p-2 px-4 rounded-md">
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
            <LucideIcon name={"Eye"} color={"gray"} size={20} strokeWidth={1.9} />
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default Field;
