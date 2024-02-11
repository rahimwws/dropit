import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import colors from "../../shared/styles/colors";
import { useNavigation } from "@react-navigation/native";
import Calculation from "../../shared/ui/Calculation/Calculation";
import { useAtom } from "jotai";
import { Carbonic, Litres } from "../../service/Items";

const ModalTracker = () => {
  const navigation = useNavigation();
  const [litres, setLitres] = useAtom(Litres);
  const [carbonic, setCarbonic] = useAtom(Carbonic);

  const CalculateItems = ()=>{

    navigation.goBack()
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.white,
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 18,
          fontFamily: "lx-r",
          marginBottom: 20,
        }}
      >
        Change your items
      </Text>
      <View>
        <Text
          style={{
            fontSize: 16,
            fontFamily: "lx-r",
            color: "#808080",
            marginBottom: 5,
          }}
        >
          Litres
        </Text>
        <TextInput
          style={{
            height: 45,
            borderRadius: 10,
            borderColor: "#f9f9f9",
            borderWidth: 2,
            marginBottom: 20,
            color: colors.blue,
            fontFamily: "lx-r",
            fontSize: 16,
            paddingLeft: 10,
          }}
          placeholder={`${litres}`}
          placeholderTextColor={colors.blue}
          keyboardType="numeric"
          maxLength={4}
          returnKeyType="done"
          onChangeText={(value:any)=>setLitres(value)}
        ></TextInput>
      </View>
      <View>
        <Text
          style={{
            fontSize: 16,
            fontFamily: "lx-r",
            color: "#808080",
            marginBottom: 5,
          }}
        >
          Carbonic
        </Text>
        <TextInput
          style={{
            height: 45,
            borderRadius: 10,
            borderColor: "#f9f9f9",
            borderWidth: 2,
            marginBottom: 20,
            color: colors.blue,
            fontFamily: "lx-r",
            fontSize: 16,
            paddingLeft: 10,
          }}
          placeholder={`${carbonic}`}
          placeholderTextColor={colors.red}
          keyboardType="numeric"
          maxLength={4}
          returnKeyType="done"
          onChangeText={(value:any)=>setCarbonic(value)}
         
        ></TextInput>
      </View>
      <TouchableOpacity
        onPress={CalculateItems}
        style={{
          borderRadius: 10,
          backgroundColor: colors.blue,
          height: 45,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          gap: 7,
        }}
      >
        <Text
          style={{
            fontFamily: "lx-r",
            color: colors.white,
            fontSize: 16,
          }}
        >
          Calculate
        </Text>
      </TouchableOpacity>
      <Calculation />
    </View>
  );
};

export default ModalTracker;
