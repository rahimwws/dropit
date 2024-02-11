import { View, Text } from "react-native";
import React from "react";
import RightArrow from "../../assets/icons/RightArrow";
import colors from "../../styles/colors";
import CircleTracker from "./CircleTracker";
import TrackerButton from "../../../components/ui/TrackerButton/TrackerButton";
import { useAtom } from "jotai";
import { Carbonic, Litres } from "../../../service/Items";

const HomeTracker = () => {
  const [liter] = useAtom(Litres)
  const [carbonic] = useAtom(Carbonic)
  return (
    <View
      style={{
        borderRadius: 20,
        borderColor: colors.white,
        backgroundColor:colors.white,
        borderWidth: 2,
        paddingHorizontal: 10,
        paddingVertical: 20,
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
            style={{ fontFamily: "lx-r", marginBottom: 5, color: "#ababab" }}
          >
            Mon, 1 Feb
          </Text>
          <Text style={{ fontFamily: "lx-m", fontSize: 18, marginBottom: 15 }}>
            Activity
          </Text>
        </View>
        <RightArrow />
      </View>
      <Text
        style={{
          color: "#ababab",
          fontSize: 14,
          fontFamily: "lx-r",
          marginBottom: 15,
        }}
      >
        Your health has increased <Text style={{ color: colors.blue }}>5%</Text>{" "}
        faster than yesterday, keep it up!
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems:"center",
          justifyContent: "space-between",
        }}
      >
        <View>
          <View style={{ flexDirection: "row", gap: 4, alignItems: "center" }}>
            <View
              style={{
                width: 4,
                height: 12,
                borderRadius: 5,
                backgroundColor: "#17C36D",
              }}
            ></View>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "lx-r",
                color:"#ababab"
              }}
            >
              Water
            </Text>
          </View>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "lx-r",
              marginBottom: 10,
            }}
          >
            {liter}
          </Text>
          <View style={{ flexDirection: "row", gap: 4, alignItems: "center" }}>
            <View
              style={{
                width: 4,
                height: 12,
                borderRadius: 5,
                backgroundColor: "#FFA308",
              }}
            ></View>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "lx-r",
                color:"#ababab"
              }}
            >
              Carbonic
            </Text>
          </View>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "lx-r",
              marginBottom: 10,
            }}
          >
            {carbonic}
          </Text>
          <View style={{ flexDirection: "row", gap: 4, alignItems: "center" }}>
            <View
              style={{
                width: 4,
                height: 12,
                borderRadius: 5,
                backgroundColor: "#5669FF",
              }}
            ></View>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "lx-r",
                color:"#ababab"
              }}
            >
              Average your points
            </Text>
          </View>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "lx-r",
              marginBottom: 10,
            }}
          >
            5 coins
          </Text>
        </View>

        <CircleTracker />
      </View>
      <TrackerButton/>
    </View>
  );
};

export default HomeTracker;
