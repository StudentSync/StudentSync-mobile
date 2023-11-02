import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/Colors";

export const styles = StyleSheet.create({
    gradient: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    main: {
      flex: 0.9,
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
    },
    container: {
      flex: 3.2,
      alignItems: "center",
      width: "90%",
      gap: 5,
    },
    containerTitle: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 32,
    },
    title: {
      color: COLORS.primary,
      fontFamily: "black",
      fontSize: 40,
      letterSpacing: -2,
    },
    subTitle: {
      color: COLORS.white,
      fontFamily: "light",
      fontSize: 16,
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
    userIcon: {
      marginLeft: 10,
    },
    lockedIcon: {
      marginLeft: 15,
      marginBottom: 5,
    },
    section: {
      width: "80%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 20,
      marginTop: 52,
    },
    checkbox: {
      borderColor: COLORS.white,
      backgroundColor: COLORS.white,
      marginBottom: 2,
    },
    paragraph: {
      fontFamily: "light",
      fontSize: 12,
      color: COLORS.white,
    },
    acessButton: {
      flexDirection: "row",
      marginTop: 24,
      marginBottom: 5,
      width: "90%",
      height: 48,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor:  COLORS.primary,
      borderRadius: 20,
    },
    acess: {
      marginHorizontal: 64,
      marginLeft: 90,
      fontFamily: "black",
      fontSize: 24,
      color: COLORS.white,
    },
    loginButton: {
      borderWidth: 1,
      borderColor: COLORS.white,
      paddingHorizontal: 36,
      paddingVertical: 10,
      borderRadius: 8,
      marginTop: 48,
    },
    login: {
      fontFamily: "medium",
      fontSize: 16,
      color: COLORS.white,
    },
});