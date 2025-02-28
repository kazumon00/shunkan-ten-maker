import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import ResultScreenStyles from "@styles/ResultScreenStyles";
import { RootStackParamList } from "@types";
import { StackNavigationProp } from "@react-navigation/stack";

type NavigationProp = StackNavigationProp<RootStackParamList, "Result">;
type ResultScreenRouteProp = RouteProp<RootStackParamList, "Result">;

const ResultScreen = () => {
    const navigation = useNavigation<NavigationProp>();
    const route = useRoute<ResultScreenRouteProp>();

    // ルートパラメーターからスコアとモードを取得
    const { finalScore, mode } = route.params;

    // もう一度遊ぶボタンの処理
    const handleRelay = () => {
        if (mode === 1) {
            navigation.navigate("Game1", { mode: 1 });
        } else if (mode === 2) {
            navigation.navigate("Game2", { mode: 2 });
        } else {
            navigation.navigate("Game3", { mode: 3 });
        }
    };

    return (
        <View style={ResultScreenStyles.container}>
            {/* スコア表示 */}
            <View style={ResultScreenStyles.scoreContainer}>
                <Text style={ResultScreenStyles.scoreTitle}>SCORE</Text>
                <Text style={ResultScreenStyles.scoreText}>{finalScore}</Text>
            </View>

            {/* アクションボタン */}
            <View style={ResultScreenStyles.buttonContainer}>
                <TouchableOpacity style={ResultScreenStyles.button} onPress={handleRelay}>
                    <Text style={ResultScreenStyles.buttonText}>もう一度遊ぶ</Text>
                </TouchableOpacity>

                <TouchableOpacity style={ResultScreenStyles.button} onPress={() => navigation.navigate("ModeSelect")}>
                    <Text style={ResultScreenStyles.buttonText}>モード選択へ</Text>
                </TouchableOpacity>

                <TouchableOpacity style={ResultScreenStyles.button} onPress={() => navigation.navigate("Title")}>
                    <Text style={ResultScreenStyles.buttonText}>タイトルへ</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ResultScreen;