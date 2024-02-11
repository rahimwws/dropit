import { View, Text } from "react-native";
import React from "react";
import colors from "../../../shared/styles/colors";
import { Image } from "expo-image";
import NewsButton from "../NewsButton/NewsButton";
import { Feather, FontAwesome5, MaterialIcons } from "@expo/vector-icons";

const NewsCard = () => {
  return (
    <View
      style={{
        marginTop: 10,
        backgroundColor: colors.white,
        height: 370,
        padding: 20,
        borderRadius: 10,
      }}
    >
      {/* User */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Image
          source={require("../../../shared/assets/img/ava.jpg")}
          style={{
            width: 45,
            height: 45,
            borderRadius: 45,
          }}
        />
        <View>
          <Text style={{ fontFamily: "lx-r", fontSize: 16 }}>
            Tretan Muslim
          </Text>
          <Text style={{ fontFamily: "lx-r", fontSize: 12, color: "#ababab" }}>
            5 minutes ago
          </Text>
        </View>
      </View>
      {/* User */}
      {/* Title */}
      <Text
        style={{
          marginTop: 5,
          fontSize: 20,
          fontFamily: "lx-r",
        }}
      >
        Carbon credits terrible year
      </Text>
      {/* Title */}
      {/* Description */}
      {/* <Text
        style={{
          marginTop: 5,
          fontSize: 14,
          fontFamily: "lx-l",
        }}
      >
        It began with a now-infamous report pouring cold water on forestry-based
        offsets and ended with talks over Article 6 falling apart spectacularly
        in Dubai.
      </Text> */}
      <Image
        source={require("../../../shared/assets/img/news.jpg")}
        style={{
            marginVertical:10,
          width: "auto",
          height: 175,
          borderRadius:5
        }}
      />
      <View style = {{
        marginTop:20,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
      }}>
        <NewsButton icon={<MaterialIcons name="favorite-outline" size={24} color={colors.red} />} active={<MaterialIcons name="favorite" size={24} color={colors.red} />}/>
        <NewsButton icon={<FontAwesome5 name="comment" size={22} color={colors.orange} /> } active={<FontAwesome5 name="comment" size={22} color={colors.orange} />}/>
        <NewsButton icon={<Feather name="share-2" size={24} color={colors.blue} />} active={<Feather name="share-2" size={24} color={colors.blue} />}/>
      </View>

    </View>
  );
};

export default NewsCard;
