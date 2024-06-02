import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Icon from "../components/icons/lucide";
import Entypo from "@expo/vector-icons/Entypo";

const TabIcon = ({ label, focused, color, icon }) => {
  return (
    <View className="items-center justify-center  flex-1 gap-y-[0.5px]">
      <Icon
        name={icon}
        size={focused ? 25 : 20}
        color={color}
        strokeWidth={focused ? 2.2 : 2.5}
      />
      <Text
        className={`${
          focused
            ? `text-base font-pbold text-primary`
            : " hidden"
        }`}
      >
        {label}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <Tabs
      sceneContainerStyle={{ backgroundColor: "transparent" }}
      screenOptions={{
        tabBarStyle: {
          width: "95%",
          borderRadius: 200,
          shadowColor: "#adb2b3",
          height: "8%",
          shadowOpacity: 100,
          alignSelf: "center",
          paddingHorizontal: 10,
          shadowOffset: 0,
          marginBottom: 20,
          borderWidth: 0,
        },
        tabBarInactiveTintColor: "#adb2b3",
        tabBarActiveTintColor: "#0A2647",
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              label={"Home"}
              icon={"Home"}
              color={color}
              focused={focused}
            />
          ),
          tabBarShowLabel: false,
          tabBarLabelStyle: { display: "none" },
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              label={"Jobs"}
              icon={"BriefcaseBusiness"}
              color={color}
              focused={focused}
            />
          ),
          tabBarShowLabel: false,
          tabBarLabelStyle: { display: "none" },
        }}
      />
      <Tabs.Screen
        name="issues"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              label={"Issues"}
              icon={"FileBarChart"}
              color={color}
              focused={focused}
            />
          ),
          tabBarShowLabel: false,
          tabBarLabelStyle: { display: "none" },
        }}
      />
      <Tabs.Screen
        name="votes"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              label={"Projects"}
              icon={"SquareGanttChart"}
              color={color}
              focused={focused}
            />
          ),
          tabBarShowLabel: false,
          tabBarLabelStyle: { display: "none" },
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              label={"Account"}
              icon={"CircleUserRound"}
              color={color}
              focused={focused}
            />
          ),
          tabBarShowLabel: false,
          tabBarLabelStyle: { display: "none" },
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
