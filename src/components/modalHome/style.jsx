import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/Colors";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(24,24,24,0.6)",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    content: {
        backgroundColor: COLORS.white,
        width: "85%", 
        paddingVertical: 24,
        borderRadius: 24, 
        alignItems: "center",
        justifyContent: "center",
    },
    viewTitle: {
        marginBottom: 16,

    },
    title: {
        color: COLORS.redOne,
        fontFamily: "bold",
        fontSize: 16,
    },
    viewInputs: {
        width: "100%",
        alignItems: "center",
        gap: 20,
    },
    viewInput: {
        width: "80%",
        alignItems: "flex-start",
        paddingVertical: 8,
        borderRadius: 8,
        borderWidth: 1.6,
    },
    input: {
        marginLeft: 16,
        width: "100%",
        borderColor: "#000",
        fontFamily: "thin",
    },
    add: {
        marginTop: 16,
    },
    close: {
        marginTop: 16,
    },
})