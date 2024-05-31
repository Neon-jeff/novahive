import { View, Text, ScrollView, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Field from "../components/fieldsets/fields";
import Icon from "../components/icons/lucide";
import Back from "../components/Navigators/Back";
import JobCards from "../components/cards/JobCards";
const Search = () => {
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
    <SafeAreaView className="px-5 pt-10 flex-1 bg-white">
      <ScrollView
        contentContainerStyle={{ gap: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <Back path="home/home" />
        <Text className="text-2xl font-psemibold ">Discover Jobs</Text>
        <View className=" ">
          <Field placeholder={"Search by keyword or skill"} label={""} />
          <View className="absolute top-1/4 right-5">
            <Icon name={"Search"} size={25} color={"black"} strokeWidth={1.5} />
          </View>
        </View>
        {/* all jobs */}
        <FlatList
          data={jobs}
          renderItem={({ item }) => <JobCards {...item} />}
          contentContainerStyle={{ gap: 15 }}
          scrollEnabled={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;
