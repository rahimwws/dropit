import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/ui/Home";
import colors from "../shared/styles/colors";
import { AntDesign, Feather, FontAwesome6, Ionicons } from "@expo/vector-icons";
import News from "../screens/ui/News";
import Statics from "../screens/ui/Statics";
import Profile from "../screens/ui/Profile";
import HomeStack from "./HomeStack";

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          borderTopWidth: 2,
          borderWidth: 2,
          borderColor: "#f9f9f9",
          borderTopColor: "#f9f9f9",
          backgroundColor: colors.white,
          position: "absolute",
          height: 70,
          bottom: 20,
          right: 20,
          left: 20,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 50,
          paddingBottom: 10,
        },
        tabBarActiveTintColor: colors.blue,
        tabBarInactiveTintColor: "#808080",
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontFamily: "lx-r",
          fontSize: 12,
        },
        headerShown: false,
        headerTitleStyle: {
          fontFamily: "lx-m",
          fontSize: 20,
        },
        headerTitleAlign: "left",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        
        options={{
          headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="News"
        component={News}
        options={{
          headerShown: true,

          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="newspaper" size={22} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Statics"
        component={Statics}
        options={{
          headerShown: true,

          tabBarIcon: ({ color, size }) => (
            <Ionicons name="stats-chart-outline" size={22} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" size={22} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default BottomTabs;
