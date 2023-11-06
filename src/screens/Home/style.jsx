import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/Colors";

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primary,
  },
  scheduleContainer: {
    flex: 0.65,
    width: "100%",
    alignItems: "center",
    marginTop: "auto",
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 48,
    borderTopRightRadius: 48,
  },
  viewText: {
    width: "40%",
    marginTop: 28,
    borderRadius: 24,
    backgroundColor: COLORS.redTwo,
  },
  scheduleText: {
    textAlign: "center",
    padding: 10,
    fontFamily: "light",
    fontSize: 18,
    color: COLORS.white,
  },
  viewCards: {
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
    marginTop: 24,
    width: "90%",
  },
  card: {
    flexDirection: "row",
    width: "85%",
    height: "24%",
    borderRadius: 24,
    backgroundColor: "#d8d8d8",
  },
  time: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 24,
    width: "32%",
    marginRight: "auto",
    backgroundColor: COLORS.primary,
  },
  startTime: {
    fontFamily: "medium",
    color: COLORS.white,
  },
});
