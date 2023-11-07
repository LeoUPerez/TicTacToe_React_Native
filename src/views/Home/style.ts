import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#e1bdfb",
        alignItems: "center",
    },
    table: {
        width: 350,
        height: 330,
        alignContent: "center",
        justifyContent: "center",
        flexDirection: "row",
        display: "flex",
        flexWrap: "wrap",
        gap: 7,
    },
    rowStyle: {
        display: "flex",
        flexDirection: "row",
        gap: 5,
    },
    turnX: {
        color: "rgba(0, 0, 255, 0.7)"
    },
    turnO: {
        color: "rgba(224, 112, 56, 0.9)"
    },
});