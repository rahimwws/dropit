import { View, Text } from "react-native";
import React from "react";
import RightArrow from "../../assets/icons/RightArrow";
import colors from "../../styles/colors";
import WeekCircle from "./WeekCircle";
import CircleDay from "../Day/CircleDay";
import { days } from "../../configs/days";

const WeekTracker = () => {
  return (
    <View
      style={{
        borderRadius: 20,
        borderColor: colors.white,
        backgroundColor:colors.white,
        borderWidth: 2,
        paddingHorizontal: 10,
        paddingVertical: 20,
        marginTop: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text
            style={{
              color: colors.black,
              fontFamily: "lx-r",
              fontSize: 16,
            }}
          >
            Your daily goals
          </Text>
          <Text
            style={{
              color: "#ababab",
              fontFamily: "lx-l",
            }}
          >
            Last 7 days
          </Text>
        </View>
        <RightArrow />
      </View>
      <View
        style={{
          backgroundColor: "#f9f9f9",
          marginTop: 15,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 10,
          borderRadius: 10,
        }}
      >
        {days.map((title: string,key:number) => {
          return <CircleDay title={title} key={key} />;
        })}
      </View>
    </View>
  );
};

export default WeekTracker;
