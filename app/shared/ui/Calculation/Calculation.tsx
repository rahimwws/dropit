import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import colors from "../../styles/colors";


const Calculation = () => {
  const [active, setActive] = useState(false);
  const [active1, setActive1] = useState(false);
 
  return (
    <View
      style={{
        marginTop: 20,
      }}
    >
      <Text
        style={{
          fontFamily: "lx-r",
          fontSize: 18,
          marginBottom: 10,
        }}
      >
        Summary
      </Text>
      <TouchableOpacity
        onPress={() => setActive(!active)}
        style={{
          height: 70,
          borderWidth: 2,
          borderRadius: 10,
          borderColor: "#f9f9f9",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          paddingHorizontal: 10,
          backgroundColor: active ? colors.blue : colors.white,
        }}
      >
        <Text
          style={{
            fontFamily: "lx-r",
            color: active ? colors.white : "#808080",
            fontSize: 16,
          }}
        >
          One glass of water
        </Text>
        <Text
          style={{
            fontFamily: "lx-r",
            color:colors.black,
            fontSize: 18,
          }}
        >
          1L/day
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setActive1(!active1)}
        style={{
            marginTop:10,
          height: 70,
          borderWidth: 2,
          borderRadius: 10,
          borderColor: "#f9f9f9",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          paddingHorizontal: 10,
          backgroundColor: active1 ? colors.blue : colors.white,
        }}
      >
        <Text
          style={{
            fontFamily: "lx-r",
            color: active1 ? colors.white : "#808080",
            fontSize: 16,
          }}
        >
      One Shower
        </Text>
        <Text
          style={{
            fontFamily: "lx-r",
            color:colors.black,
            fontSize: 18,
          }}
        >
          1/day
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Calculation;
