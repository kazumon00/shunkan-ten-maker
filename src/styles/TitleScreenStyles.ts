import React from "react";
import { StyleSheet } from "react-native";

const TitleScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    //ゲームタイトル
    title: {
        fontSize: 32,
        fontWeight: "bold",
    },
    //ボタン
    button: {
        backgroundColor: "#3498db",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    //ボタンテキスト
    buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
})

export default TitleScreenStyles;