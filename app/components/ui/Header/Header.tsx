import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../../../shared/styles/colors";
import Bell from "../../../shared/assets/icons/Bell";
import gaps from "../../../shared/styles/gaps";

// import ava from "../../../shared/assets/img/photo.jpg";
import { Image } from "expo-image";

const Header = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.blue,
        height: 120,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginHorizontal: gaps.pd20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <View>
            <Image
              source={require("../../../shared/assets/img/photo.jpg")}
              style={{
                width: 40,
                height: 40,
                borderRadius: 40,
              }}
            />
          </View>
          <View>
            <Text
              style={{ fontFamily: "lx-l", color: colors.white, fontSize: 16,
            marginBottom:5 }}
            >
              Welcome
            </Text>
            <Text
              style={{ fontFamily: "lx-m", color: colors.white, fontSize: 20 }}
            >
              Rahim Hudaykuliew
            </Text>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: colors.white,
              width: 40,
              height: 40,
              borderRadius: 45,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                position: "absolute",
                top: 4,
                backgroundColor: "red",
                height: 15,
                width: 15,
                borderRadius: 15,
                zIndex: 9,
                right: 8,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 10,
                  fontFamily: "lx-r",
                  color: colors.white,
                }}
              >
                1
              </Text>
            </View>
            <Bell />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;
