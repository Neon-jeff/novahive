import {
  View,
  Text,
  Pressable,
  Image,
  Alert,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import image from "../../assets/images/onboarding/connect-wallet.png";
import Icon from "../components/icons/lucide";
import { Link, router } from "expo-router";
import Button from "../components/buttons/button";
import { useWeb3Modal } from "@web3modal/wagmi-react-native";
import { useAccount, useDisconnect } from "wagmi";
const ConnectWallet = () => {
  const { disconnect } = useDisconnect();
  const { isConnected, isConnecting } = useAccount({
    onConnect() {
      // router.push('create-pin')
    },
  });
  const { open, close } = useWeb3Modal();

  const handlePress = async () => {
    await open();
  };

  return (
    <SafeAreaView className="px-8 bg-white flex-1 py-5 gap-y-10">
      <TouchableOpacity
        onPress={() => {
          router.push("(register)/create-pin");
        }}
        className="px-2 py-2  rounded-full bg-neutral-100 flex-row items-center justify-center  self-start"
      >
        <Icon name={"ChevronLeft"} size={25} color={"black"} />
      </TouchableOpacity>
      <Image source={image} resizeMode="contain" className="w-full h-1/3" />
      <View className=" gap-y-10 items-center rounded-md ">
        <View className="gap-y-2 items-center w-3/4">
          <Text className="font-psemibold text-2xl ">Connect Wallet</Text>
          <Text className="font-pregular text-center text-lg">
            Securely create your identity by adding your wallet
          </Text>
        </View>
        <View className="w-full items-center" style={{ gap: 20 }}>
          <Button
            style=""
            text={isConnected ? "Disconnect Wallet" : "Connect Wallet"}
            action={() => {
              handlePress();
            }}
          />
          {isConnected && <Button type="secondary" text={"Next"} action={()=>{router.push('create-pin')}} />}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ConnectWallet;
