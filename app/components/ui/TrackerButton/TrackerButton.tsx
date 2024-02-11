import { View, Text, TouchableOpacity, Button } from "react-native";
import React from "react";
import Add from "../../assets/svg/Add";
import colors from "../../../shared/styles/colors";
import { useNavigation } from "@react-navigation/native";

const TrackerButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Calculate")}
      style={{
        borderRadius: 10,
        borderColor: "#f9f9f9",
        borderWidth: 2,
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        gap: 7,
      }}
    >
      <Add color={colors.black} />
      <Text
        style={{
          fontFamily: "lx-r",
        }}
      >
        Edit Activity
      </Text>
    </TouchableOpacity>
  );
};

export default TrackerButton;
