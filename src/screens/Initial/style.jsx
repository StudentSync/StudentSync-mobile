import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/Colors";

export const styles = StyleSheet.create({
    gradient: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    background: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    containerLogo: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    logo: {
      fontFamily: "black",
      color: COLORS.primary,
      fontSize: 40,
    },
    subTitle: {
      color: COLORS.white,
      fontFamily: "light",
      fontSize: 18,
    },
    button: {
      backgroundColor: COLORS.white,
      padding: 12,
      paddingHorizontal: 36,
      marginTop: 36,
      borderRadius: 18,
    },
    textButton: {
      fontFamily: "light",
      color: COLORS.secondary,
      fontSize: 20,
    },
  });
  