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
      alignItems: "center",
      justifyContent: "flex-start",
      width: "100%",
      height: "32%",
      borderRadius: 20,
    },
    nameOrganizer: {
      textAlign: "center",
      marginTop: 25,
      fontFamily: "medium",
      fontSize: 18,
      color: COLORS.white
    },
    containerInvitation:{
      width: "80%",
    },
    textNotification: {
      textAlign: "center",
      marginTop: 15,
      fontFamily: "light",
      fontSize: 17,
      color: COLORS.white
    },
    containerAnswer: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 25,
      marginRight:10,
      marginLeft:10,
    },
    button: {
      backgroundColor: COLORS.white,
      width: "38%",
      height:"44%",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 20,
    },
    textReject: {
      textAlign: "center",
      fontFamily: "light",
      fontSize: 16,
      color: COLORS.redTwo
    },
    textAccept: {
      textAlign: "center",
      fontFamily: "light",
      fontSize: 16,
      color: COLORS.secondary
    },
});