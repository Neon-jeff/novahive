import { View, Text,Image } from 'react-native'
import React from 'react'
import Field from './components/fieldsets/fields'
import Button from './components/buttons/button'
import { SafeAreaView } from 'react-native-safe-area-context'
import image from "../assets/images/onboarding/create-pin.png";
import { Link,router } from 'expo-router'

const LoginPassword = () => {
  return (
    <SafeAreaView className="px-5 bg-white py-10 justify-between  gap-y-5  flex-1">
      <View className="self-start gap-y-2"></View>
      <View className=" " style={{ gap: 20 }}>
        <Text className="self-start text-3xl    font-pbold">Login</Text>
        <Field label={"Email"} isNumber={true} maxLength={4} />
        <Field
          label={"Password"}
          isHidden={true}
          isNumber={true}
          maxLength={4}
        />
        <Button
          style="w-full mt-5"
          text={"Login "}
          action={() => {
            router.push("login");
          }}
        />
      </View>
      <Text className="font-pregular text-lg mt-5 text-center">
        Don't have an account yet?{" "}
        <Link href={"/(register)/account-type"}>
          <Text className="text-sky-500 font-pmedium">Create Account</Text>
        </Link>{" "}
      </Text>
    </SafeAreaView>
  );
}

export default LoginPassword