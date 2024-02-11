import { View, Text, ScrollView } from "react-native";
import React from "react";
import colors from "../../shared/styles/colors";
import gaps from "../../shared/styles/gaps";
import HomeTracker from "../../shared/ui/Tracker/HomeTracker";
import WeekTracker from "../../shared/ui/Tracker/WeekTracker";
import ArticleCard from "../../components/ui/Cards/ArticleCard";
import ArticleTabView from "../../navigation/ArticleTabView";

const HomeContainer = () => {
  return (
    <ScrollView
      style={{
        paddingHorizontal: 10,
        paddingTop: 20,
     
        flex: 1,
        minHeight: 500,
      }} showsVerticalScrollIndicator= {false} 
    >
        <HomeTracker/>
        <WeekTracker/>
        <ArticleTabView />
      </ScrollView>
  );
};

export default HomeContainer;
