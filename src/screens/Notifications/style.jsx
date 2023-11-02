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
      flex: 1.5,
      alignItems: "center",
      width: "90%",
      gap: 5,
    },
});