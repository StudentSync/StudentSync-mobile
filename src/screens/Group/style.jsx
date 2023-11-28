import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/Colors";


export const styles = StyleSheet.create({
    background: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: COLORS.white,
      gap: 5,
    },
    containerNavigation: {
      width: "90%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    title: {
      color: COLORS.primary,
      fontFamily: "light",
      fontSize: 20,
      marginRight: "auto",
      marginLeft: 10,
    },
    containerGroup: {
      height:"65%",
      width: "90%",
      alignItems: "center",
      justifyContent: "center",
      gap:10,
    },
    cardGroup: {
      backgroundColor: COLORS.primary,
      height: "15%",     
      width: "90%",
      justifyContent: "space-evenly",
      alignItems: "center",
      borderRadius: 20,
    },
    titleGroup: {
      color: COLORS.white,
      fontSize: 22,
      fontFamily: "light",
    },
    textGroup: {
      color: COLORS.secondary,
      fontSize: 16,
      fontFamily: "thin",
    }
});