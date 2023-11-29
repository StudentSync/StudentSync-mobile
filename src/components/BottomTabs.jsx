import React from "react";
import { StyleSheet } from "react-native";

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeIcon from "react-native-vector-icons/FontAwesome5";
import GroupIcon from "react-native-vector-icons/FontAwesome";
import NotificationIcon from "react-native-vector-icons/Ionicons";
import ProfileIcon from "react-native-vector-icons/FontAwesome";
import { COLORS } from "../utils/Colors";
import { useRole } from "../contexts/RoleContext"; 

import Home from "../screens/Home";
import Group from "../screens/Group";
import Notifications from "../screens/Notifications";
import ProfileStudent from "../screens/ProfileStudent";
import ProfileTeacher from "../screens/ProfileTeacher";

const Tab = createMaterialBottomTabNavigator();

function Main() {
  const { role } = useRole();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <HomeIcon name="home" color={COLORS.primary} size={24} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Group"
        component={Group}
        options={{
          tabBarIcon: ({ color, size }) => (
            <GroupIcon name="group" color={COLORS.primary} size={24} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({ color, size }) => (
            <NotificationIcon
              name="notifications"
              color={COLORS.primary}
              size={24}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={role === "teacher" ? ProfileTeacher : ProfileStudent}
        options={{
          tabBarIcon: ({ color, size }) => (
            <ProfileIcon name="user" color={COLORS.primary} size={24} />
          ),
          headerShown: false,
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