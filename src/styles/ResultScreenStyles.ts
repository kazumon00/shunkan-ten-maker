import React from "react";
import { StyleSheet } from "react-native";

const ResultScreenStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    scoreText: {
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#3498bd",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    buttonText: {
        color: "White",
        fontSize: 18,
        fontWeight: "bold",
    },
});

export default ResultScreenStyle;