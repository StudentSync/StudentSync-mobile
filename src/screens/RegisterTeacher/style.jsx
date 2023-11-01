import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    gradient: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    main: {
      flex: 0.9,
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
    },
    containerTitle: {
      flex:1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 32,
    },
    title: {
      color: "#223843",
      fontFamily: "black",
      fontSize: 40,
      letterSpacing: -2,
    },
    subtitle: {
      color: "#eff1f3",
      fontFamily: "light",
      fontSize: 15,
    },
    container: {
      flex: 3.2,
      alignItems: "center",
      width: "90%",
      gap: 5,
    },
    labelAbout: {
      marginLeft: 0,
      marginTop: 8,
      fontFamily: "light",
      fontSize: 15,
      color: "#eff1f3",
    },
    viewInputAbout: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 24,
      borderWidth: 1,
      borderColor: "#eff1f3",
      backgroundColor: "#eff1f3",
      borderRadius: 20,
      width: "90%",
      height: 120,
    },
    inputAbout: {
      marginTop: 18,
      backgroundColor: "#eff1f3",
      borderRadius: 20,
      marginBottom: 15,
      textAlign: "center",
      justifyContent: "center",
      color: "#223843",
      fontFamily: "light",
      fontSize: 14,
      height:"40%",
      width: "90%",
    },
    label: {
      marginTop: 8,
      fontFamily: "thin",
      fontSize: 14,
      color: "#eff1f3",
    },
    input: {
      marginTop: 18,
      justifyContent: "center",
      backgroundColor: "transparent",
      marginBottom: 15,
      color: "#eff1f3",
      fontFamily: "light",
      fontSize: 17,
    },
    labelSelect: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,0.2)",
      borderColor: "rgba(0,0,0,0)",
      borderRadius: 20,
      width: "90%",
      height: "30%",
    },
    textSelect: {
      marginRight: "auto",
      marginLeft: 80,
      backgroundColor: "transparent",
      color: "#eff1f3",
      fontFamily: "thin",
      fontSize: 13,
    },
    dropDown: {
      borderColor: "rgba(0,0,0,0.2)",
    },
    textDropDown: {
      color:"#eff1f3",
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
      backgroundColor: "#223843",
      borderRadius: 20,
    },
    acess: {
      marginHorizontal: 64,
      marginLeft: 90,
      fontFamily: "black",
      fontSize: 24,
      color: "#fff",
    },
});

export default styles;