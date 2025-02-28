import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@types";
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import ModeSelectScreenStyles from "@styles/ModeSelectScreenStyles";

type NavigationProp = StackNavigationProp<RootStackParamList, "ModeSelect">;

const ModeSelectScreen = () => {
    const navigation = useNavigation<NavigationProp>();

    // モード選択ボタンの状態
    const [selectedMode, setSelectedMode] = useState<number>(1);

    // モードに応じてゲームスタートボタンから画面遷移
    const handleGameStart = () => {
        if (selectedMode === 1) {
            navigation.navigate("Game1", { mode: 1 });
        } else if (selectedMode === 2) {
            navigation.navigate("Game2", { mode: 2 });
        } else {
            navigation.navigate("Game3", { mode: 3 });
        }
    };

    return (
        <View style={ModeSelectScreenStyles.container}>
            {/* 一番上の説明 */}
            <View style={ModeSelectScreenStyles.descriptionSection}>
                {selectedMode === 1 && (
                    <Text style={ModeSelectScreenStyles.instructionText}>
                        2つの数字を組み合わせる
                        {"\n"}
                        シンプルモード
                        {"\n"}
                        瞬間的に10を作ろう!
                    </Text>
                )}
                {selectedMode === 2 && (
                    <Text style={ModeSelectScreenStyles.instructionText}>
                        3つの数字を組み合わせる
                        {"\n"}
                        応用モード
                        {"\n"}
                        瞬時にひらめき、
                        {"\n"}
                        素早く選択！
                    </Text>
                )}
                {selectedMode === 3 && (
                    <Text style={ModeSelectScreenStyles.instructionText}>
                        3つの数字 + マイナス数字の
                        {"\n"}
                        超難関モード
                        {"\n"}
                        極限の瞬発力と
                        {"\n"}
                        計算力が試される！
                    </Text>
                )}
            </View>

            {/* 画像の表示 */}
            <View style={ModeSelectScreenStyles.imageContainer}>
                {selectedMode === 1 && (
                    <Image source={require("../../assets/game1.png")} style={ModeSelectScreenStyles.image} />
                )}
                {selectedMode === 2 && (
                    <Image source={require("../../assets/game2.png")} style={ModeSelectScreenStyles.image} />
                )}
                {selectedMode === 3 && (
                    <Image source={require("../../assets/game3.png")} style={ModeSelectScreenStyles.image} />
                )}
            </View>

            {/* 下半分: モード選択とアクションボタン */}
            <View style={ModeSelectScreenStyles.bottomSection}>
                {/* モード選択 */}
                <View style={ModeSelectScreenStyles.modeSectionContainer}>
                    <TouchableOpacity 
                        onPress={() => setSelectedMode(1)} 
                        style={[
                            ModeSelectScreenStyles.modeButton, 
                            selectedMode === 1 && ModeSelectScreenStyles.selectedModeButton
                        ]}
                    >
                        <Text style={[
                            ModeSelectScreenStyles.modeButtonText, 
                            selectedMode === 1 && ModeSelectScreenStyles.selectedModeText
                        ]}>10ビルダー</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={() => setSelectedMode(2)} 
                        style={[
                            ModeSelectScreenStyles.modeButton, 
                            selectedMode === 2 && ModeSelectScreenStyles.selectedModeButton
                        ]}
                    >
                        <Text style={[
                            ModeSelectScreenStyles.modeButtonText, 
                            selectedMode === 2 && ModeSelectScreenStyles.selectedModeText
                        ]}>10メイカー</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={() => setSelectedMode(3)} 
                        style={[
                            ModeSelectScreenStyles.modeButton, 
                            selectedMode === 3 && ModeSelectScreenStyles.selectedModeButton
                        ]}
                    >
                        <Text style={[
                            ModeSelectScreenStyles.modeButtonText, 
                            selectedMode === 3 && ModeSelectScreenStyles.selectedModeText
                        ]}>10ブレイカー</Text>
                    </TouchableOpacity>
                </View>

                {/* アクションボタン */}
                <View style={ModeSelectScreenStyles.actionButtonContainer}>
                    <TouchableOpacity onPress={handleGameStart} style={ModeSelectScreenStyles.startButton}>
                        <Text style={ModeSelectScreenStyles.startButtonText}>ゲームスタート</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Title")} style={ModeSelectScreenStyles.titleButton}>
                        <Text style={ModeSelectScreenStyles.startButtonText}>タイトルへ</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default ModeSelectScreen;