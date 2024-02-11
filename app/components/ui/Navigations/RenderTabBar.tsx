import {
  Animated,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../../../shared/styles/colors";

export const RenderTabBar = ({ navigationState, position, setIndex }) => {
    const inputRange = navigationState.routes.map((x, i) => i);
  
    return (
      <View style={styles.tabBar}>
        {navigationState.routes.map((route, i) => {
          const opacity = position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === i ? 1 : 0.5
            ),
          });
  
          return (
            <TouchableOpacity
              style={styles.tabItem}
              key={route.key}
              onPress={() => setIndex(i)}>
              <Animated.Text style={{ opacity,color:colors.red,fontFamily:"lx-r",fontSize:16,}}>{route.title}</Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };
const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    paddingTop: StatusBar.currentHeight,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    padding: 5,

  },
});
