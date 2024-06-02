import { View, Text, Pressable, ScrollView, FlatList } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "../../components/icons/lucide";
import NotificationsCard from "../../components/cards/NotificationsCard";
import Back from "../../components/Navigators/Back";

const Notifications = () => {
  let [allNotif, setAllNotif] = useState(true);
  const notifications = [
    {
      type: "deposit",
      read: true,
      message: "Your account has been credited with $500.",
      date: "2024-05-01T09:30:00Z",
      title: "Deposit Successful",
    },
    {
      type: "job_alert",
      read: false,
      message: "New job alert: Software Engineer at TechCorp.",
      date: "2024-05-02T14:45:00Z",
      title: "New Job Alert",
    },
    {
      type: "issue",
      read: true,
      message: "There is an issue with your recent transaction.",
      date: "2024-05-03T11:15:00Z",
      title: "Transaction Issue",
    },
    {
      type: "deposit",
      read: false,
      message: "Your account has been credited with $1000.",
      date: "2024-05-04T08:00:00Z",
      title: "Deposit Successful",
    },
    {
      type: "job_alert",
      read: true,
      message: "New job alert: Data Analyst at Data Solutions.",
      date: "2024-05-05T16:30:00Z",
      title: "New Job Alert",
    },
    {
      type: "issue",
      read: false,
      message: "Your account is temporarily locked due to suspicious activity.",
      date: "2024-05-06T10:00:00Z",
      title: "Account Issue",
    },
    {
      type: "deposit",
      read: true,
      message: "Your account has been credited with $750.",
      date: "2024-05-07T13:45:00Z",
      title: "Deposit Successful",
    },
    {
      type: "job_alert",
      read: false,
      message: "New job alert: Project Manager at BuildIt Inc.",
      date: "2024-05-08T12:20:00Z",
      title: "New Job Alert",
    },
    {
      type: "issue",
      read: true,
      message:
        "Issue detected in your payment method. Please update your details.",
      date: "2024-05-09T09:50:00Z",
      title: "Payment Issue",
    },
    {
      type: "deposit",
      read: false,
      message: "Your account has been credited with $1200.",
      date: "2024-05-10T15:35:00Z",
      title: "Deposit Successful",
    },
  ];

  const [notifs, SetNotifs] = useState(notifications);

  return (
    <SafeAreaView className="flex-1 bg-white px-5">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ gap: 20 }}>
          {/* Top Bar */}
          <View className=" " style={{ gap: 20 }}>
            <Back path="/home/" />
            <Text className="text-2xl font-psemibold">Notifications</Text>
          </View>

          {/* Notifications Toggle */}
          <View className="flex-row gap-x-5">
            <Pressable
              onPress={() => {
                setAllNotif(true);
                SetNotifs(notifications);
              }}
              className={`p-3 w-20 ${
                allNotif ? "bg-sky-400" : "bg-sky-200"
              } rounded-full`}
            >
              <Text className="text-center font-psemibold ">All</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                setAllNotif(false);
                SetNotifs(notifications.filter((item) => item.read == false));
              }}
              className={`p-3 w-20 ${
                !allNotif ? "bg-sky-400" : "bg-sky-100"
              } rounded-full`}
            >
              <Text className="text-center font-psemibold">Unread</Text>
            </Pressable>
          </View>
          {/* Notification List Items */}
          <FlatList
            data={notifs}
            scrollEnabled={false}
            renderItem={({ item }) => <NotificationsCard {...item} />}
            contentContainerStyle={{ gap: 10 }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notifications;
