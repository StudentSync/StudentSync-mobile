import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/Colors";

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: COLORS.primary,
  },
  add: {
    marginTop: 64,
    left: '80%',
  },
  monthView: {
    marginTop: 24,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 24,
    gap: 24,
  },
  month: {
    fontFamily: "light",
    fontSize: 18,
    color: COLORS.white,
    marginTop: 8,
  },
  scheduleContainer: {
    flex: 0.8,
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
    height: "28%",
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
    fontSize: 24,
    color: COLORS.white,
  },
  endTime: {
    color: COLORS.white,
  },
  titleCard: {
    alignItems: "center",
    marginRight: "auto",
    marginTop: 24,
  },
  title: {
    fontFamily: "medium",
    color: COLORS.primary,
    fontSize: 18,
  },
  information: {
    marginTop: 12,
    gap: 5,
  },
  room: {
    color: COLORS.secondary,
    fontFamily: "medium",
  },
  organizer: {
    color: COLORS.secondary,
    fontFamily: "medium",
  },
});
