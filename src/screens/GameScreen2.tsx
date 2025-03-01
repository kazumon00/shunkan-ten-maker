import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import GameScreenStyles from "@styles/GameScreenStyles";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@types";
import { StackNavigationProp } from "@react-navigation/stack";

type NavigationProp = StackNavigationProp<RootStackParamList, "Title">;

// 数字をランダムに生成する処理（1〜8）
const generateRandomNumber = () => Math.floor(Math.random() * 8) + 1;

// 押されたボタンの定義
type SelectedButton = {
  value: number;
  index: number;
};

const GameScreen2 = () => {
  const navigation = useNavigation<NavigationProp>();

  // スコアの管理（初期値0）
  const [score, setScore] = useState(0);

  // 制限時間の管理
  const [timeLeft, setTimeLeft] = useState(10);

  // ゲーム開始状態
  const [isGameStarted, setIsGameStarted] = useState(false);

  // ゲームプレイ状態：trueならプレイ中
  const [isPlaying, setIsPlaying] = useState(false);

  // カウントダウンの状態（カウントダウンが始まっていれば数字が入る）
  const [countdown, setCountdown] = useState<number | null>(3);

  // カウントダウン終了後にゲーム開始を表示する状態
  const [showStartMessage, setShowStartMessage] = useState(false);

  //ゲーム終了後状態
  const [isGameEnding, setIsGameEnding] = useState(false);

  // カウントダウン処理
  useEffect(() => {
    if (countdown === null) return;
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      // countdownが0になったとき、スタートメッセージを表示
      setShowStartMessage(true);
      setCountdown(null);
    }
  }, [countdown]);

  // ゲーム開始メッセージ表示後、1秒経過したらゲームプレイ開始
  useEffect(() => {
    if (showStartMessage) {
      const timer = setTimeout(() => {
        setShowStartMessage(false);
        setIsPlaying(true);
        setTimeLeft(10);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [showStartMessage]);

  // ゲームのスタートボタンが押された時の処理
  const handleStart = () => {
    setIsGameStarted(true);
    setTimeLeft(10);
  };

  // 制限時間の処理
  useEffect(() => {
    if (!isPlaying || isGameEnding) return;

    if (timeLeft <= 0) {
        setIsGameEnding(true);

        setTimeout(() => {
            navigation.navigate("Result", {finalScore: score, mode: 2});
        }, 2000);

      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [isPlaying, timeLeft, navigation, score]);

  // 押されたボタンの管理
  const [selectedButtons, setSelectedButtons] = useState<SelectedButton[]>([]);

  // ボタンの数字の管理（15個のボタン、3列×5行）
  const [gridNumbers, setGridNumbers] = useState<number[]>(
    Array.from({ length: 15 }, () => generateRandomNumber())
  );

  // ボタンを押した時の処理（今回は3つの数字を選ぶ）
  const handlePress = (value: number, index: number) => {
    // すでに押されているか確認
    const alreadySelected = selectedButtons.some((btn) => btn.index === index);
    if (alreadySelected) {
      // 既に選択されていれば解除
      setSelectedButtons(selectedButtons.filter((btn) => btn.index !== index));
      return;
    }

    // すでに3個選ばれている場合は何もしない
    if (selectedButtons.length >= 3) return;

    // 新たに選択を追加
    const newSelection = [...selectedButtons, { value, index }];
    setSelectedButtons(newSelection);

    // もし3つの数字が選択されたら処理開始
    if (newSelection.length === 3) {
      const sum = newSelection.reduce((acc, btn) => acc + btn.value, 0);

      // 合計が10ならスコア+1、違えば-1
      if (sum === 10) {
        setScore((prev) => prev + 1);
      } else {
        setScore(prev => Math.max(0, prev - 1));
      }

      // 選択されたボタンの数字のみ更新
      setGridNumbers((prevNumbers) => {
        const newNumbers = [...prevNumbers];
        newSelection.forEach((btn) => {
          newNumbers[btn.index] = generateRandomNumber();
        });
        return newNumbers;
      });

      //0.1秒後に選択状態をリセット
      setTimeout(() => {
        setSelectedButtons([]);
      }, 100);
    }
  };

  // シャッフル機能：グリッド全体を新たなランダムな数字で更新
  const handleShuffle = () => {
    setGridNumbers(Array.from({ length: 15 }, () => generateRandomNumber()));
  };

  return (
    <View style={GameScreenStyles.container}>
      {/* 上部：スコアとタイマーは常に表示 */}
      <View style={GameScreenStyles.topSection}>
        <Text style={GameScreenStyles.scoreText}>Score: {score}</Text>
        <Text style={GameScreenStyles.timerText}>Time Left: {timeLeft}</Text>
      </View>

      {/* 中央：グリッド */}
      <View style={GameScreenStyles.grid}>
        {gridNumbers.map((value, index) => {
          const isSelected = selectedButtons.some((btn) => btn.index === index);
          return (
            <TouchableOpacity
              key={index}
              style={[
                GameScreenStyles.button,
                isSelected && GameScreenStyles.selectedButton,
              ]}
              onPress={() => handlePress(value, index)}
              disabled={!isPlaying}
            >
              <Text style={GameScreenStyles.buttonText}>{value}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* 下部：シャッフルボタン */}
      <View style={GameScreenStyles.bottomSection}>
        <TouchableOpacity onPress={handleShuffle} style={GameScreenStyles.shuffleButton}>
          <Text style={GameScreenStyles.shuffleButtonText}>シャッフル</Text>
        </TouchableOpacity>
      </View>

      {/* ゲーム開始前のオーバーレイ */}
      {(countdown !== null || showStartMessage || isGameEnding) && (
        <View style={GameScreenStyles.overlay}>
          {countdown !== null && (
            <Text style={GameScreenStyles.countdownText}>{countdown}</Text>
          )}
          {showStartMessage && (
            <Text style={GameScreenStyles.startMessageText}>ゲームスタート</Text>
          )}
          {isGameEnding && <Text style={GameScreenStyles.gameEndText}>ゲーム終了</Text>}
        </View>
      )}

      {/* ゲーム開始前のスタートボタン */}
      {!isGameStarted && !isPlaying && countdown === null && !showStartMessage && (
        <TouchableOpacity onPress={handleStart} style={GameScreenStyles.startButton}>
          <Text style={GameScreenStyles.startButtonText}>スタート</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default GameScreen2;