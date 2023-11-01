import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/Colors";

export const styles = StyleSheet.create({
    background: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: COLORS.primary,
    },
    containerLogo: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 32,
    },
    logo: {
      color: COLORS.secondary,
      fontFamily: "black",
      fontSize: 40,
      letterSpacing: -2,
    },
    subTitle: {
      color: COLORS.white,
      fontFamily: "light",
      fontSize: 16,
    },
    container: {
      flex: 1.5,
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
      backgroundColor: "transparent",
      marginBottom: 15,
      color: COLORS.white,
      fontFamily: "light",
      fontSize: 17,
    },
    emailIcon: {
      marginLeft: 10,
    },
    lockedIcon: {
      marginLeft: 15,
      marginBottom: 5,
    },
    acessButton: {
      flexDirection: "row",
      marginTop: 24,
      marginBottom: 5,
      width: "90%",
      height: 48,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: COLORS.secondary,
      borderRadius: 20,
    },
    acess: {
      marginHorizontal: 64,
      marginLeft: 90,
      fontFamily: "black",
      fontSize: 24,
      color: COLORS.primary,
    },
    register: {
      marginTop: 10,
      fontFamily: "light",
      color: COLORS.white,
      textDecorationLine: "underline",
    },
});