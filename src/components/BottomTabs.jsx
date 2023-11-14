import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import ProfileStudent from "../screens/ProfileStudent";
import Notifications from "../screens/Notifications";
import HomeIcon from "react-native-vector-icons/Octicons"
import NotificationIcon from "react-native-vector-icons/Ionicons"
import ProfileIcon from "react-native-vector-icons/AntDesign"
import { COLORS } from "../utils/Colors";

const Tab = createBottomTabNavigator();

function Main() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <HomeIcon name="home" color={COLORS.primary} size={24} /> // Ícone para a tela "Home"
          ), headerShown: false
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({ color, size }) => (
            <NotificationIcon name="notifications-outline" color={COLORS.primary} size={24} /> // Ícone para a tela "Notifications"
          ), headerShown: false
        }}
      />
      <Tab.Screen
        name="ProfileStudent"
        component={ProfileStudent}
        options={{
          tabBarIcon: ({ color, size }) => (
            <ProfileIcon name="user" color={COLORS.primary} size={24} /> // Ícone para a tela "Profile"
          ), headerShown: false
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

export default Main;
