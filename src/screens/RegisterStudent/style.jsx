import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/Colors";

export const styles = StyleSheet.create({
    gradient: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    main: {
      flex: 0.8,
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
    },
    containerTitle: {
      flex:1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 32,
      maxWidth: "90%",
    },
    title: {
      color: COLORS.white,
      fontFamily: "black",
      fontSize: 40,
      letterSpacing: -2,
      textAlign: "center",
    },
    subtitle: {
      color: COLORS.white,
      fontFamily: "light",
      fontSize: 15,
    },
    container: {
      flex: 3.2,
      alignItems: "center",
      width: "90%",
    },
    labelAbout: {
      fontFamily: "light",
      fontSize: 15,
      color: COLORS.white,
    },
    viewInputAbout: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 24,
      borderWidth: 1,
      borderColor: COLORS.white,
      backgroundColor: COLORS.white,
      borderRadius: 20,
      width: "90%",
      height: 120,
    },
    inputAbout: {
      marginTop: 18,
      backgroundColor: COLORS.white,
      borderRadius: 20,
      marginBottom: 15,
      textAlign: "center",
      justifyContent: "center",
      color: COLORS.primary,
      fontFamily: "light",
      fontSize: 14,
      height:"40%",
      width: "90%",
    },
    label: {
      marginTop: 8,
      fontFamily: "thin",
      fontSize: 14,
      color: COLORS.white,
    },
    input: {
      marginTop: 18,
      justifyContent: "center",
      backgroundColor: "transparent",
      marginBottom: 15,
      color: COLORS.white,
      fontFamily: "light",
      fontSize: 17,
    },
    labelSelect: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,0.2)",
      borderColor: "transparent",
      borderRadius: 20,
      width: "90%",
      height: "30%",
    },
    textSelect: {
      marginRight: "auto",
      marginLeft: 80,
      backgroundColor: "transparent",
      color: COLORS.white,
      fontFamily: "thin",
      fontSize: 13,
    },
    dropDown: {
      borderColor: "rgba(0,0,0,0.2)",
    },
    textDropDown: {
      color:COLORS.white,
      textAlign: "center",
      fontSize: 15,
      fontFamily: "thin",
    },
    acessButton: {
      flexDirection: "row",
      marginTop: 24,
      marginBottom: 5,
      width: "90%",
      height: 48,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: COLORS.primary,
      borderRadius: 20,
    },
    acess: {
      marginHorizontal: 64,
      marginLeft: 90,
      fontFamily: "black",
      fontSize: 24,
      color: COLORS.white,
    },
});

export default styles;