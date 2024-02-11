import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Add from "../../components/assets/svg/Add";
import colors from "../../shared/styles/colors";
import NewsContainer from "../../widgets/ui/NewsContainer";
import AddButton from "../../components/ui/AddButton/AddButton";

const News = () => {
  return (
    <View style={{ flex: 1 }}>
      <AddButton />
      <NewsContainer />
    </View>
  );
};

export default News;
