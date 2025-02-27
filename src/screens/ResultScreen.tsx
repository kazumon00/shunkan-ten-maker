import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import ResultScreenStyles from "@styles/ResultScreenStyles";
import { RootStackParamList } from "@types";
import { StackNavigationProp } from "@react-navigation/stack";

type NavigationProp = StackNavigationProp<RootStackParamList, "Result">;

type ResultScreenRouteProp = RouteProp<RootStackParamList, "Result">;

const ResultScreen = () => {

    const navigation = useNavigation<NavigationProp>();

    const route = useRoute<ResultScreenRouteProp>();

    //ルートパラメーターからfinalScoreを取り出す
    const {finalScore, mode} = route.params;

    //もう一度遊ぶボタンのモードの処理
    const handleRelay = () => {
        if (mode === 1) {
            navigation.navigate("Game1", {mode: 1});
        } else if (mode === 2) {
            navigation.navigate("Game2", {mode: 2});
        } else {
            navigation.navigate("Game3", {mode: 3});
        }
    }

    return (
        <View style={ResultScreenStyles.container}>
            <Text style={ResultScreenStyles.scoreText}>Score:{finalScore}</Text>
            {/*もう一度遊ぶボタン*/}
            <TouchableOpacity 
                style={ResultScreenStyles.button}
                onPress={handleRelay}
                >
                <Text style={ResultScreenStyles.buttonText}>もう一度遊ぶ</Text>
            </TouchableOpacity>

            {/*モード選択画面ボタン*/}
            <TouchableOpacity 
                style={ResultScreenStyles.button}
                onPress={() => navigation.navigate("ModeSelect")}
                >
                <Text style={ResultScreenStyles.buttonText}>モード選択画面へ</Text>
            </TouchableOpacity>

            {/*タイトル画面ボタン*/}
            <TouchableOpacity 
                style={ResultScreenStyles.button}
                onPress={() => navigation.navigate("Title")}
                >
                <Text style={ResultScreenStyles.buttonText}>タイトルへ</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ResultScreen;