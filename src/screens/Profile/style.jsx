import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#eff1f3",
    },
    container: {
      flex: 1.5,
      alignItems: "center",
      width: "90%",
      gap: 5,
    },
    containerNavigation: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 32,
    },
    containerTitle: {
      flex: 1,
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 32,
    },
    title: {
      color: "#223843",
      fontFamily: "ligth",
      fontSize: 20,
      letterSpacing: 0,
    },
    iconsNavigation: {
      flex: 1,
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 25,
    },
    containerUser: {
      flex: 1.5,
      alignItems: "center",
      justifyContent: "flex-start",
    },
    nameUser: {
      color: "#223843",
      fontFamily: "medium",
      fontSize: 23,
      marginBottom: 0,
    },
    photoUser: {
      marginBottom: 45,
    },
    card: {
      flex: 4.5,
      backgroundColor: "#223843",
      width: "112%",
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 42,
    },
    officeContainer: {
      flex: 1,
      justifyContent: "flex-start",
      marginTop: 25,
      width: "30%",
    },
    officeCard: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f71735",
      borderRadius: 30,
      width: "100%",
      height: "35%",
    },
    officeUser: {
      color: "#eff1f3",
      fontFamily: "medium",
      fontSize: 20,
    },
    courseContainer: {
      flex: 1,
      justifyContent: "flex-start",
    },
    courseCard: {
      flex: 1,
      justifyContent: "flex-start",
      width: "70%",
    },
    courseText: {
      color: "#eff1f3",
      fontFamily: "medium",
      fontSize: 18,
      textAlign: "center",
    },
    semesterContainer: {
      flex: 1,
      justifyContent: "flex-start",
      width: "33%",
    },
    semesterCard: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#0dab76",
      borderRadius: 30,
      width: "100%",
      height: "38%",
    },
    semesterText: {
      color: "#eff1f3",
      fontFamily: "medium",
      fontSize: 18,
      textAlign: "center",
    },
    disponibilityContainer: {
      flex: 4,
      justifyContent: "flex-start",
      alignItems: "center",
      width: "90%",
      height: "20%",
    },
    disponibilityCard: {
      justifyContent: "flex-start",
      alignItems: "center",
      backgroundColor: "#eff1f3",
      borderRadius: 30,
      width: "85%",
      height: "50%",
    },
    label: {
      flex: 0.6,
      alignItems: "flex-start",
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 10,
      width: "100%",
      height: "20%",
    },
    textLabel: {
      marginRight: 70,
      marginTop: 10,
      fontFamily: "light",
      fontSize: 14,
      color: "#223843",
    },
    iconLabel: {
      marginRight: "auto",
      marginLeft: 20,
      marginTop: 5,
    },
    input: {
      backgroundColor: "transparent",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 10,
      color: "#223843",
      fontFamily: "light",
      fontSize: 17,
    },
});