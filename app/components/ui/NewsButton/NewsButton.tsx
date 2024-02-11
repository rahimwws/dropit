import { View, Text } from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
  icon: any;
  active: any;
};

const NewsButton = (props: Props) => {
  const [active, setActive] = useState(false);
  return (
    <View
      style={{
        width: 100,
        height: 40,
        borderColor: "#f8f8f8",
        borderWidth: 2,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
      }}
    >
      <View onTouchStart={() => setActive(!active)}>
        {active ? props.active : props.icon}
      </View>
    </View>
  );
};

export default NewsButton;
