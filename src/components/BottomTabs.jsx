import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from '../screens/Home';
import Profile from "../screens/Profile";
import Notifications from "../screens/Notifications";

const Tab = createBottomTabNavigator();

function Main() {
  return (
    <Tab.Navigator style={styles.main}>
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }}/>
      <Tab.Screen name="Notifications" component={Notifications} options={{ headerShown: false }}/>
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
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
