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
    marginTop: 24,
    marginLeft: "10%",
    width: "95%",
    alignSelf: "center",
    
  },
  homeCards: {
    marginTop: 24,
  },
});
