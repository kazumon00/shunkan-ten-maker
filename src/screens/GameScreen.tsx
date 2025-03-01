import React, { useState, useEffect} from "react";
import {View, Text, TouchableOpacity} from "react-native";
import GameScreenStyles from "@styles/GameScreenStyles";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@types";
import { StackNavigationProp } from "@react-navigation/stack";

type NavigationProp = StackNavigationProp<RootStackParamList, "Title">;

//数字をランダムに生成する処理
const generateRandomNumber = () => Math.floor(Math.random() * 9) + 1;

//押されたボタンの定義
type SelectedButton = {
    value: number;
    index: number;
};

const GameScreen = () => {

    const navigation = useNavigation<NavigationProp>();

    //スコアの管理 初期値は0
    const [score, setScore] = useState(0);

    //制限時間の管理
    const [timeLeft, setTimeLeft] = useState(10);

    //ゲームの開始状態
    const [isGameStarted, setIsGameStarted] = useState(false);

    //ゲームプレイの状態 trueならプレイ中 falseならカウントダウン、ゲーム開始、終了表示
    const [isPlaying, setIsPlaying] = useState(false);

    //カウントダウンの状態
    const [countdown, setCountdown] = useState<number | null>(3);

    //カウントダウン終了後ゲーム開始を表示する状態
    const [showStartMessage, setShowStartMessage] = useState(false);

    //ゲーム終了後状態
    const [isGameEnding, setIsGameEnding] = useState(false);

    //カウントダウン処理
    useEffect(() => {
        if(countdown === null) return;
        if(countdown > 0) {
            const timer = setTimeout(() => {
                setCountdown(countdown - 1);
            }, 1000);
            return () => clearTimeout(timer);
        } else {
            //countdownが0になった際にゲーム開始を表示する
            setShowStartMessage(true);
            setCountdown(null);
        }
    }, [countdown]);

    //ゲーム開始のメッセージが表示されて、１秒経過したらゲームプレイ開始
    useEffect(() => {
        if(showStartMessage) {
            const timer = setTimeout(() => {
                setShowStartMessage(false);
                setIsPlaying(true);
                setTimeLeft(10);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [showStartMessage]);

    //ゲームのスタートボタンが押された時の制限時間の開始処理
    const handleStart = () => {
        setIsGameStarted(true);
        setTimeLeft(10);
    };

    //制限時間の処理
    useEffect(() => {
        if(!isPlaying || isGameEnding) return;

        //制限時間が0になったらゲーム終了を表示してリザルト画面へ遷移
        if(timeLeft <= 0) {
            setIsGameEnding(true);

            setTimeout(() => {
                navigation.navigate("Result", {finalScore: score, mode: 1});
            }, 2000);

            return;
        }

        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        //クリーンアップ関数
        return () => clearInterval(timer);
    }, [isPlaying, timeLeft]);

    //押されたボタンの管理
    const [selectedButtons, setSelectedButtons] = useState<SelectedButton[]>([]);

    //ボタンの数字の管理
    const [gridNumbers, setGridNumbers] = useState<number[]>(
        Array.from({length: 15}, () => generateRandomNumber())
    );

    //ボタンを押した時の処理
    const handlePress = (value: number, index: number) => {

        //ボタンが押されているか確認
        const alreadySelected = selectedButtons.some((btn) => btn.index === index);

        //すでに押されていたら選択から解除
        if (alreadySelected) {
            setSelectedButtons(selectedButtons.filter((btn) => btn.index !== index));
            return;
        }

        //2個ボタンを押したらそれ以降の入力は無視
        if (selectedButtons.length >= 2) return;

        //現在の選択に今回押された値を追加する
        const newSelection = [...selectedButtons, {value, index}];
        setSelectedButtons(newSelection);

        //2つのボタンが押された時にのみ処理を実行
        if(newSelection.length === 2){

            //もし2つのボタンが選択されたら
            const sum = newSelection.reduce((acc, btn) => acc + btn.value, 0);

            //合計が10ならば+１、それ以外は-1
            if (sum === 10) {
                setScore(prev => prev + 1);
            } else {
                setScore(prev => Math.max(0, prev - 1));
            }

            //選択されたボタンの数字を更新する処理
            setGridNumbers((prevNumbers) => {
                const newNumbers = [...prevNumbers];
                newSelection.forEach((btn) => {
                    newNumbers[btn.index] = generateRandomNumber();
                });
                return newNumbers;
            })

            //0.1秒後に選択状態をリセット
            setTimeout(() => {
                setSelectedButtons([])
            }, 100);
        }
    }
    
    // シャッフル機能の実装：グリッド全体を新しいランダムな数字で更新
    const handleShuffle = () => {
        setGridNumbers(Array.from({ length: 15 }, () => generateRandomNumber()));
    };

    return (
        <View style={GameScreenStyles.container}>
          {/* 上部：スコアとタイマー*/}
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
                  disabled={!isPlaying} // ゲームプレイが始まっていないときは無効
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
      
          {/* カウントダウンオーバーレイ：カウントダウン中またはスタートメッセージ表示中なら上に重ねる */}
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
      
          {/* ゲーム開始前のスタートボタン（必要なら） */}
          {!isGameStarted && !isPlaying && countdown === null && !showStartMessage && (
            <TouchableOpacity onPress={handleStart} style={GameScreenStyles.startButton}>
              <Text style={GameScreenStyles.startButtonText}>スタート</Text>
            </TouchableOpacity>
          )}
        </View>
      );
};

export default GameScreen;