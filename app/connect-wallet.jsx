import { View, Text, Pressable } from "react-native";
import React from "react";
import { useWeb3Modal } from "@web3modal/wagmi-react-native";
import {
  WalletConnectModal,
  useWalletConnectModal,
} from "@walletconnect/modal-react-native";

const ConnectWallet = () => {
  const { isOpen, open, close, provider, isConnected, address } =
    useWalletConnectModal();

  const handlePress = async () => {
    if (isConnected) {
      await provider.disconnect();
    } else {
      await open();
    }
  };

  return (
    <View className="justify-center items-center flex-1 gap-10 px-5">
      <Text className="text-4xl text-gray-700 text-center font-pmedium">
        Click to connect your wallet
      </Text>
      <Pressable
        className="bg-blue-500 p-5 rounded-full w-1/2 text-center"
        onPress={() => {
          handlePress();
        }}
      >
        <Text className="text-center text-white text-lg font-plight">
          Connect Wallet
        </Text>
      </Pressable>
      <Text className="text-lg font-pregular">
        {isConnected ? address : "Not Connected"}
      </Text>
    </View>
  );
};

export default ConnectWallet;
