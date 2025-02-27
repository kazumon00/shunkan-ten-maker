import React from "react";
import { StyleSheet } from "react-native";

const GameScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a", // ダークな背景
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  // 上部セクション：スコアとタイマー
  topSection: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  scoreText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  timerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  // 中央のグリッド：15個のボタン（3列×5行）
  grid: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around", // ボタン間の均等配置
    alignItems: "center",
  },
  button: {
    width: "30%",       // 3列に収めるため
    aspectRatio: 1,     // 正方形にする
    backgroundColor: "#3498db",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginVertical: 10,
  },
  selectedButton: {
    backgroundColor: "#f1c40f", // 選択状態の際の背景色（黄色）
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  // 下部セクション：シャッフルボタンを配置
  bottomSection: {
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  shuffleButton: {
    backgroundColor: "#f39c12",  // シャッフルボタンのオレンジ色
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  shuffleButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  // ゲーム開始前のオーバーレイ（カウントダウンやゲームスタートメッセージ用）
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  countdownText: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#fff",
  },
  startMessageText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "yellow",
    marginTop: 10,
  },
  // ゲーム開始前に表示するスタートボタン（オーバーレイではなく通常配置）
  startButton: {
    backgroundColor: "#27ae60", // 緑色
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  startButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  gameEndText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "red",
    marginTop: 10,
},
highScoreText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#f1c40f", // 黄色でハイスコアを目立たせる
    marginBottom: 15,
},
});

export default GameScreenStyles;