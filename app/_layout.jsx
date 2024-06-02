import "@walletconnect/react-native-compat";
import { View, Text } from "react-native";
import React from "react";
import { Slot, Stack, SplashScreen } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { WagmiConfig } from "wagmi";
import { mainnet, polygon, arbitrum } from "viem/chains";
import {
  createWeb3Modal,
  defaultWagmiConfig,
  Web3Modal,
} from "@web3modal/wagmi-react-native";

const metadata = {
  name: "Web3Modal RN",
  description: "Web3Modal RN Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
  redirect: {
    native: "novehive",
    universal: "YOUR_APP_UNIVERSAL_LINK.com",
  },
};
const projectId = "d0660cba3c91e5b78a98e82df5d075a0";

// wallet chain configs

const chains = [mainnet, polygon, arbitrum];

const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// 3. Create modal
createWeb3Modal({
  projectId,
  chains,
  wagmiConfig,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
});

SplashScreen.preventAutoHideAsync();
const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Onest-Black": require("../assets/fonts/Onest/Onest-Black.ttf"),
    "Onest-Bold": require("../assets/fonts/Onest/Onest-Bold.ttf"),
    "Onest-ExtraBold": require("../assets/fonts/Onest/Onest-ExtraBold.ttf"),
    "Onest-ExtraLight": require("../assets/fonts/Onest/Onest-ExtraLight.ttf"),
    "Onest-Light": require("../assets/fonts/Onest/Onest-Light.ttf"),
    "Onest-Medium": require("../assets/fonts/Onest/Onest-Medium.ttf"),
    "Onest-Regular": require("../assets/fonts/Onest/Onest-Regular.ttf"),
    "Onest-SemiBold": require("../assets/fonts/Onest/Onest-SemiBold.ttf"),
    "Onest-Thin": require("../assets/fonts/Onest/Onest-Thin.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) {
    return null;
  }
  return (
    <WagmiConfig config={wagmiConfig}>
      <Stack>
        <Stack.Screen name="(onboarding)" options={{ headerShown: false }} />
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="no-auth"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="loginPassword"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="connect-wallet"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
            contentStyle: { backgroundColor: "white", height: "20%" },
          }}
        />
        <Stack.Screen
          name="(register)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="login"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="test-components"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
      <Web3Modal />
    </WagmiConfig>
  );
};

export default RootLayout;
