import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@types";
import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import {useState, useEffect} from "react";
import ModeSelectScreenStyles from "@styles/ModeSelectScreenStyles";

type NavigationProp = StackNavigationProp<RootStackParamList, "ModeSelect">;

const ModeSelectScreen = () => {

    const navigation = useNavigation<NavigationProp>();

    //モード選択ボタンの状態
    const [selectedMode, setSelectedMode] = useState<number>(1);

    //モードに応じてゲームスタートボタンから画面遷移
    const handleGameStart = () => {
        if (selectedMode === 1) {
            navigation.navigate("Game1", {mode: 1});
        } else if (selectedMode === 2) {
            navigation.navigate("Game2", {mode: 2});
        } else {
            navigation.navigate("Game3", {mode: 3});
        }
    };

    return (
        <View style={ModeSelectScreenStyles.container}>
            {/*上半分：ゲーム説明*/}
            <View style={ModeSelectScreenStyles.topSection}>
                {selectedMode === 1 && (
                    <Text style={ModeSelectScreenStyles.instructionText}>
                        2つの数字を組み合わせて10を作ろう
                    </Text>
                )}
                {selectedMode === 2 && (
                    <Text style={ModeSelectScreenStyles.instructionText}>
                        3つの数字を組み合わせて10を作ろう
                    </Text>
                )}
                {selectedMode === 3 && (
                    <Text style={ModeSelectScreenStyles.instructionText}>
                        3つの数字を組み合わせて10を作ろう
                        ※マイナスの数字も出てくるので高難易度！！
                    </Text>
                )}
            </View>

            {/*下半分:モード選択とアクションボタン*/}
            <View style={ModeSelectScreenStyles.bottomSection}>
                {/*モード選択*/}
                <View style={ModeSelectScreenStyles.modeSectionContainer}>
                    <TouchableOpacity onPress={() => setSelectedMode(1)} style={ModeSelectScreenStyles.modeButton}>
                        <Text style={ModeSelectScreenStyles.modeButtonText}>モード１</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelectedMode(2)} style={ModeSelectScreenStyles.modeButton}>
                        <Text style={ModeSelectScreenStyles.modeButtonText}>モード2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelectedMode(3)} style={ModeSelectScreenStyles.modeButton}>
                        <Text style={ModeSelectScreenStyles.modeButtonText}>モード3</Text>
                    </TouchableOpacity>
                </View>

                {/*アクションボタン*/}
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