import ModeSelectScreen from "@screens/ModeSelectScreen";
import React from "react";
import { StyleSheet } from "react-native";

const ModeSelectScreenStyles = StyleSheet.create({
      // 画面全体のコンテナ
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",  // タイトル画面に合わせた暗い背景色
    padding: 20,
    justifyContent: "space-between",
  },
  // 上半分：ゲーム説明エリア
  topSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  instructionText: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
  },
  // 下半分全体のコンテナ
  bottomSection: {
    flex: 1,
    justifyContent: "center",
  },
  // モード選択エリア：横並びで3つのボタン
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
  },
  modeButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  // アクションエリア：下側に「ゲームスタート」と「タイトルへ」ボタン
  actionButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  startButton: {
    backgroundColor: "#27ae60",  // ゲームスタート用の緑系の色
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  titleButton: {
    backgroundColor: "#e74c3c",  // タイトルへ戻るボタンは赤系
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  startButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  // カウントダウンオーバーレイ：ゲームスタート押下後、画面全体に重ねる
  countdownOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.6)",  // 半透明の黒背景
    justifyContent: "center",
    alignItems: "center",
  },
  countdownText: {
    fontSize: 64,
    fontWeight: "bold",
    color: "#fff",
  },
})

export default ModeSelectScreenStyles;