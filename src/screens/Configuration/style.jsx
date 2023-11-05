import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/Colors";

export const styles = StyleSheet.create({
    background: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: COLORS.primary,
    },
    containerNavigation: {
        flex: 0.5,
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 32,
    },
    containerTitle: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 32,
    },
    title: {
        color: COLORS.redTwo,
        fontFamily: "ligth",
        fontSize: 20,
        marginRight: 38,
    },
    iconsNavigation: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 30,
        marginLeft: 25,
    },
    containerUser: {
        flex:1.5,
        width: "90%",
        justifyContent: "center",
        alignItems: "center",
    },
    userName: {
        color: COLORS.white,
        fontFamily: "medium",
        letterSpacing: 0.5,
        fontSize: 20,
    },
    userEmail: {
        color: COLORS.white,
        fontFamily: "light",
        fontSize: 16,
        marginTop: 20,
    },
    container: {
        flex: 0.8,
        alignItems: "center",
        width: "90%",
        gap: 5,
    },
    label: {
      marginRight: "auto",
      marginLeft: 48,
      marginTop: 8, 
      fontFamily: "thin",
      fontSize: 14,
      color: COLORS.white,
    },
    viewInput: {
      flexDirection: "row",
      alignItems: "center",
      gap: 24,
      borderWidth: 1,
      borderColor: COLORS.white,
      borderRadius: 20,
      width: "90%",
      height: 64,
    },
    input: {
      marginTop: 18,
      marginBottom: 15,
      marginLeft: 15, 
      backgroundColor: "transparent",
      color: COLORS.white,
      fontFamily: "light",
      fontSize: 16,
    },
    containerSingOut: {
        flex: 1.8,
        width: "90%",
        alignItems: "center",
        justifyContent: "center",
    },
    singOutButton: {
      marginTop: 80,
      width: "30%",
      height: 35,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: COLORS.redTwo,
      borderRadius: 20,
    },
    singOut: {
      fontFamily: "light",
      fontSize: 18,
      color: COLORS.white,
    },
    
});