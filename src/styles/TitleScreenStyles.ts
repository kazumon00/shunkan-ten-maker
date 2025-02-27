import { StyleSheet } from "react-native";

const TitleScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#D3D3D3", // 明るいグレー背景
    },
    // ゲームタイトル
    title: {
        fontSize: 36,
        fontWeight: "bold",
        color: "#333", // ダークグレーで視認性UP
        marginBottom: 40,
    },
    // ボタン（青系）
    button: {
        backgroundColor: "#3498db", // 青系（ModeSelectScreenと統一）
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 8,
        shadowColor: "#217dbb", // 影も青系で統一
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    // ボタンテキスト
    buttonText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
    },
});

export default TitleScreenStyles;