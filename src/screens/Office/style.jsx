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
    flex: 0.4,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 36,
  },
  title: {
    color: COLORS.white,
    textAlign: "center",
    fontFamily: "black",
    fontSize: 36,
  },
  subTitle: {
    color: COLORS.white,
    fontFamily: "light",
    fontSize: 16,
  },
  textSelection: {
    marginTop: 36,
    color: COLORS.white,
    fontFamily: "book",
    fontSize: 16,
  },
  navBar: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  navItem: {
    alignItems: "center",
    padding: 36,
  },
  navImg: {
    width: 50,
    height: 50,
    // tintColor: "white",
  },
  navText: {
    fontFamily: "book",
    fontSize: 18,
    color: COLORS.white,
    marginTop: 10,
    marginBottom: 24,
  },
});
