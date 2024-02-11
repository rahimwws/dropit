import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../../shared/styles/colors";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const ArticleCard = () => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
    onPress={()=>navigation.navigate("Article")}
      style={{
        marginTop: 10,
        height: 100,
        borderRadius: 10,
        borderColor: colors.white,
        backgroundColor:colors.white,
        borderWidth: 2,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <MaterialCommunityIcons
          name="book-open-page-variant"
          size={35}
          color={colors.red}
        />
        <View>
          <Text
            style={{
              fontFamily: "lx-m",
              fontSize: 16,
              marginBottom: 5,
            }}
          >
            Guide on Climate Disaster
          </Text>
          <Text
            style={{
              color: "#ababab",
              fontFamily: "lx-r",
              fontSize: 14,
            }}
          >
            3 lessons
          </Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AntDesign name="clockcircleo" size={24} color={colors.blue} />
        <Text style={{ color: colors.blue, fontFamily: "lx-r" }}>3 min</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ArticleCard;
