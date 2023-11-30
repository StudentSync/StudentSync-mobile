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
    marginTop: "5%",
    width: "70%",
  },
  scrollTitleCard: {
    flexDirection:"column",
    alignItems: "center",
    marginRight: "auto",
    gap: 10,
  },
  informationCard: {
    width: "100%",
    height:"100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  title: {
    fontFamily: "medium",
    color: COLORS.primary,
    textAlign: "center",
    fontSize: 18,
    width: "100%",
    height: "30%",
  },
  information: {
    justifyContent:"center",
    width: "80%",
    height: "120%",
    gap: 6,
  },
  room: {
    color: COLORS.secondary,
    fontFamily: "medium",
    textAlign: "center",
  },
  organizer: {
    color: COLORS.secondary,
    fontFamily: "medium",
    textAlign: "center",
  },
  positionIcon: {
    marginTop: "5%",
    justifyContent: "center",
  },
});
