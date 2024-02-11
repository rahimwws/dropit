import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import colors from "../shared/styles/colors";
import ModalTracker from "./Modal/ModalTracker";
import Home from "../screens/ui/Home";
import ModalArticle from "./Modal/ModalArticle";

const HomeStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name="Calculate"
          component={ModalTracker}
          options={{ headerShown: true, headerTintColor: colors.blue }}
        />
      </Stack.Group>
      <Stack.Group >
        <Stack.Screen name="Article" component={ModalArticle}   options={{ headerShown: false,headerTintColor:colors.blue }} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default HomeStack;
