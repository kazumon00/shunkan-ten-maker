import { StyleSheet } from "react-native";

const ModeSelectScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#D3D3D3",
        padding: 20,
        justifyContent: "space-between",
    },
    // 説明テキストエリア（上部）
    descriptionSection: {
        flex: 0.8,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    instructionText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333",
        textAlign: "center",
        maxWidth: "80%",
        lineHeight: 28,
    },
    // 画像エリア
    imageContainer: {
        flex: 1.2,
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
        backgroundColor: "#3498db",
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: "transparent",
    },
    selectedModeButton: {
        backgroundColor: "#1d70b8",
        borderColor: "#fff",
    },
    modeButtonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff",
    },
    selectedModeText: {
        color: "#f1c40f",
    },
    actionButtonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    startButton: {
        backgroundColor: "#3498db",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    titleButton: {
        backgroundColor: "#3498db",
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