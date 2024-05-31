import { View, Text, FlatList, ScrollView, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TopBar from "../../components/HomeComponents/TopBar";
import ProfileCard from "../../components/HomeComponents/ProfileCard";
import Icon from "../../components/icons/lucide";
import JobCards from "../../components/cards/JobCards";
import { router } from "expo-router";

const Home = () => {
  const jobs = [
    {
      job_title: "Software Engineer",
      company: "TechCorp",
      wage: "2.5 BTC",
      experience_level: "Mid-level",
      job_type: "Full-time",
      job_description:
        "Develop and maintain software applications, collaborate with team, debug code, and ensure high-quality user experience.",
    },
    {
      job_title: "Data Analyst",
      company: "Data Solutions",
      wage: "3 ETH",
      experience_level: "Entry-level",
      job_type: "Part-time",
      job_description:
        "Analyze data sets, generate reports, identify trends, assist decision-making, and support data-driven strategies for business growth.",
    },
    {
      job_title: "Project Manager",
      company: "BuildIt Inc.",
      wage: "1.2 BTC",
      experience_level: "Senior",
      job_type: "Full-time",
      job_description:
        "Oversee project lifecycle, manage teams, ensure deadlines, allocate resources, and deliver successful projects within scope and budget.",
    },
    {
      job_title: "Graphic Designer",
      company: "Creative Minds",
      wage: "4 ETH",
      experience_level: "Mid-level",
      job_type: "Contract",
      job_description:
        "Create visual content, design marketing materials, collaborate with clients, and ensure brand consistency across various media platforms.",
    },
    {
      job_title: "Sales Representative",
      company: "SalesPro",
      wage: "0.8 BTC",
      experience_level: "Entry-level",
      job_type: "Full-time",
      job_description:
        "Identify sales opportunities, meet sales targets, build client relationships, and promote products or services to potential customers.",
    },
    {
      job_title: "UX/UI Designer",
      company: "Design Hub",
      wage: "3.5 ETH",
      experience_level: "Mid-level",
      job_type: "Remote",
      job_description:
        "Design user interfaces, enhance user experience, conduct user research, create wireframes, and collaborate with development teams.",
    },
    {
      job_title: "Marketing Specialist",
      company: "Marketify",
      wage: "3 ETH",
      experience_level: "Mid-level",
      job_type: "Full-time",
      job_description:
        "Develop marketing strategies, create campaigns, analyze market trends, manage social media, and optimize marketing efforts for growth.",
    },
    {
      job_title: "DevOps Engineer",
      company: "CloudWorks",
      wage: "1 BTC",
      experience_level: "Senior",
      job_type: "Full-time",
      job_description:
        "Manage infrastructure, automate processes, ensure system reliability, support development teams, and implement continuous integration.",
    },
    {
      job_title: "Product Manager",
      company: "InnovateX",
      wage: "1.5 BTC",
      experience_level: "Senior",
      job_type: "Full-time",
      job_description:
        "Define product vision, prioritize features, manage development process, collaborate with stakeholders, and drive product success.",
    },
    {
      job_title: "Customer Support Specialist",
      company: "HelpDesk",
      wage: "2 ETH",
      experience_level: "Entry-level",
      job_type: "Part-time",
      job_description:
        "Assist customers, resolve issues, provide product information, ensure customer satisfaction, and maintain accurate support records.",
    },
  ];

  return (
    <SafeAreaView className="px-5 pt-10 bg-white" style={{ gap: 20 }}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ gap: 20 }}>
          <TopBar />
          <View className=" " style={{ gap: 5 }}>
            {/* <Text className="text-lg font-pmedium">Expert Freelancer</Text> */}
          </View>
          <ProfileCard />
          <View className="text-lg flex-row justify-between items-center">
            <Text className="text-lg font-psemibold">Recommended For You</Text>
            <Pressable
              className="flex-row items-center "
              style={{ gap: 5 }}
              onPress={() => {
                router.push("(tabs)/search");
              }}
            >
              <Text className="text-base font-pregular">See All</Text>
              <Icon
                name={"ArrowRight"}
                color={"black"}
                size={20}
                strokeWidth={1.4}
              />
            </Pressable>
          </View>
          <FlatList
            data={jobs}
            renderItem={({ item }) => <JobCards {...item} />}
            contentContainerStyle={{ gap: 15 }}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
