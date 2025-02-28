import { StyleSheet } from "react-native";

const ModeSelectScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#D3D3D3", // 明るいグレー
        padding: 20,
        justifyContent: "space-between",
    },
    // 説明テキストエリア（上部）
    descriptionSection: {
        flex: 0.8, // 少し大きめにしてバランスを取る
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    instructionText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333",
        textAlign: "center",
        maxWidth: "80%", // 説明テキストの横幅を制限
        lineHeight: 28, // 行間を広げて可読性をアップ
    },
    // 画像エリア
    imageContainer: {
        flex: 1.2, // 説明より少し大きめにする
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: "80%",
        height: "100%",
        resizeMode: "contain",
    },
    // 下半分（モード選択・ボタンエリア）
    bottomSection: {
        flex: 1,
        justifyContent: "center",
    },
    modeSectionContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 20,
    },
    modeButton: {
        backgroundColor: "#3498db", // デフォルトの青
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: "transparent", // デフォルトでは枠なし
    },
    selectedModeButton: {
        backgroundColor: "#1d70b8", // 選択時に少し暗めの青に
        borderColor: "#fff", // 選択時に白枠を追加
    },
    modeButtonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff",
    },
    selectedModeText: {
        color: "#f1c40f", // 選択時のテキストを黄色にして目立たせる
    },
    actionButtonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    startButton: {
        backgroundColor: "#3498db", // 統一
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    titleButton: {
        backgroundColor: "#e74c3c", // 赤系
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    startButtonText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
    },
});

export default ModeSelectScreenStyles;