import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/Colors";

export const styles = StyleSheet.create({
    background: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: COLORS.white,
    },
    container: {
      flex: 1,
      alignItems: "center",
      width: "90%",
      gap: 5,
    },
    containerNavigation: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-end",
      
      backgroundColor: COLORS.secondary
    },
    positionAddIcon: {
      flex: 1,
      flexDirection: "row",
      width: "50%"
    },
    containerTitle: {
      flex: 1,
      justifyContent: "space-between",
      alignItems: "flex-start",
    },
    title: {
      color: COLORS.primary,
      fontFamily: "light",
      fontSize: 20,
    },
    iconGroup: {
      flex: 1,
      alignItems: "center",
      justifyContent: "space-between",
    },
    containerGroup:{
      flex: 1,
      alignItems: "center",
      justifyContent: "space-around",
      width: "90%",
      height: "50%",
      marginBottom: 120,
    },
    cardGroup: {
      backgroundColor: COLORS.secondary,
      alignItems: "center",
      justifyContent: "flex-start",
      width: "100%",
      height: "32%",
      borderRadius: 20,
    },
    nameGroup: {
      textAlign: "center",
      marginTop: 25,
      fontFamily: "medium",
      fontSize: 18,
      color: COLORS.white
    },
    containerGroup:{
      width: "80%",
    },
    textGroup: {
      textAlign: "center",
      marginTop: 15,
      fontFamily: "light",
      fontSize: 17,
      color: COLORS.white
    },
});