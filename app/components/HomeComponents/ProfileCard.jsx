import { View, Text } from "react-native";
import React from "react";
import Icon from "../icons/lucide";

const ProfileCard = () => {
  return (
    <View className="bg-primary  px-5 py-5 rounded-xl " style={{ gap: 15 }}>
      {/* go to details */}
      <View className="self-end flex-row items-center " style={{ gap: 2 }}>
        <Text className="text-blue-300 font-pregular ">Details</Text>
        <Icon
          name={"ChevronRight"}
          size={15}
          color={"rgb(147 197 253)"}
          strokeWidth={1.5}
        />
      </View>
      <View className=" flex-row justify-between ">
        {/* balance detalis */}
        <View>
          <Text className="text-neutral-300 text-sm pb-1 font-pmedium">
            Wallet Balance
          </Text>
          <View>
            <Text className="text-neutral-100 font-psemibold text-2xl">
              $850.56
            </Text>
            <Text className="text-green-300 text-xs   font-pmedium">
              (+8% last month)
            </Text>
          </View>
        </View>
        {/* spend Limit */}
        <View className=" self-end  rounded-md ">
          <View className="flex-row items-center pb-1 gap-x-1 ">
            <Icon
              name={"CircleDollarSign"}
              size={20}
              color={"rgbrgb(147 197 253)"}
              strokeWidth={1.5}
            />
            <Text className="text-blue-300 text-sm    font-pmedium">
              Spend Limit
            </Text>
          </View>
          <View>
            <Text className="text-neutral-200 text-sm    font-pbold">
              <Text className="text-lg">-$1000/</Text>$5000
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileCard;
