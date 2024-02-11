import { View, Text } from "react-native";
import React from "react";
import WeekCircle from "../Tracker/WeekCircle";

type Props = {
  title: string;
};

const CircleDay = (props: Props) => {
  return (
    <View style={{ alignItems: "center" }}>
      <WeekCircle />
      <Text
        style={{
          fontFamily: "lx-r",
          color: "#ababab",
        }}
      >
        {props.title}
      </Text>
    </View>
  );
};

export default CircleDay;
