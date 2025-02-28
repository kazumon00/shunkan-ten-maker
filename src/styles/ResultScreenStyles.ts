import { StyleSheet } from "react-native";

const ResultScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#D3D3D3", // 明るめのグレーで統一
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    // スコア表示エリア
    scoreContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    scoreTitle: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 10,
    },
    scoreText: {
        fontSize: 48,
        fontWeight: "bold",
        color: "#3498db", // 青で強調
    },
    // ボタンエリア
    buttonContainer: {
        flex: 1,
        justifyContent: "center",
        width: "100%",
        alignItems: "center",
    },
    button: {
        backgroundColor: "#3498db", // 青系ボタン
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        width: "80%",
        alignItems: "center",
        marginBottom: 15, // ボタン間の余白
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
    },
});

export default ResultScreenStyles;