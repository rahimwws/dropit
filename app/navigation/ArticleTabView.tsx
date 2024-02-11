import { View, Text, useWindowDimensions } from "react-native";
import React, { useState } from "react";
import { SceneMap, TabView } from "react-native-tab-view";
import ArticleCard from "../components/ui/Cards/ArticleCard";
import colors from "../shared/styles/colors";
import { RenderTabBar } from "../components/ui/Navigations/RenderTabBar";
import Articles from "../screens/tabs/Articles";

const ArticleTabView = () => {
  const [index, setIndex] = useState(0);
  const layout = useWindowDimensions();
  const [routes] = React.useState([
    { key: "first", title: "Articles" },
    { key: "second", title: "News" },
  ]);

  const handleIndexChange = (currentIndex) => setIndex(currentIndex);

  const renderScene = SceneMap({
    first: Articles,
    second: ArticleCard,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      renderTabBar={(props) => (
        <RenderTabBar {...props} setIndex={handleIndexChange} />
      )}
      onIndexChange={handleIndexChange}
      initialLayout={{ width: layout.width }}
      style={{
        height: 500,
        marginTop:20,
      }}
    />
  );
};

export default ArticleTabView;
