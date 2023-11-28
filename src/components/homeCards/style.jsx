import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/Colors";

export const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    width: "85%",
    height: 120,
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
    marginTop: "10%",
    width: "100%",
  },
  scrollTitleCard: {
    flexDirection:"column",
    alignItems: "center",
    marginRight: "auto",
    width: "50%",
    gap: 10,
  },
  title: {
    fontFamily: "medium",
    color: COLORS.primary,
    textAlign: "center",
    fontSize: 18,
  },
  information: {
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
