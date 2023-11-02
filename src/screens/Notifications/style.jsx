import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/Colors";

export const styles = StyleSheet.create({
    background: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: COLORS.primary,
    },
    container: {
      flex: 1.5,
      alignItems: "center",
      width: "90%",
      gap: 5,
    },
    photoUser: {
      marginTop: 70,
      marginRight: "auto",
      marginLeft: 10,
    },
    containerNavigation: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 32,
      marginLeft: 10,
    },
    containerTitle: {
      flex: 1,
      justifyContent: "space-between",
      marginTop: 4,
      marginLeft: 12,
    },
    title: {
      color: COLORS.white,
      fontFamily: "light",
      fontSize: 20,
    },
    iconsNavigation: {
      flex: 1,
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 25,
    },
    containerNotification:{
      flex: 10,
      alignItems: "center",
      justifyContent: "space-around",
      width: "90%",
      height: "50%",
      marginBottom: 120,
    },
    cardNotification: {
      backgroundColor: COLORS.secondary,
      alignItems: "flex-start",
      justifyContent: "flex-start",
      width: "100%",
      height: "32%",
      borderRadius: 20,
      
    },
});