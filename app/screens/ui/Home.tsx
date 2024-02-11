import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Header from "../../components/ui/Header/Header";
import HomeContainer from "../../widgets/ui/HomeContainer";
import colors from "../../shared/styles/colors";

const Home = () => {
  return (
    <View style = {{
        flex:1,
    }}>
      <HomeContainer/>
    </View>
  );
};

export default Home;
