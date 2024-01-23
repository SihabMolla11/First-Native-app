import { AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Text } from "react-native";
import Home from "../Screens/HomeScreen/Home";
import Login from "../Screens/LoginScreen/Login";

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: () => <Text style={{ color: "black", fontSize: 20, marginTop: -7, fontWeight: 700 }}>Home</Text>,
          tabBarIcon: () => <AntDesign name="home" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarLabel: () => <Text style={{ color: "black", fontSize: 20, marginTop: -7, fontWeight: 700 }}>Login</Text>,
          tabBarIcon: () => <AntDesign name="login" size={24} color="black" />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
