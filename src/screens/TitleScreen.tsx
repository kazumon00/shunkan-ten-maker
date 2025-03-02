import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Animated } from "react-native";
import TitleScreenStyles from "@styles/TitleScreenStyles";
import { RootStackParamList } from "@types";
import { StackNavigationProp } from "@react-navigation/stack";

type NavigationProp = StackNavigationProp<RootStackParamList, "Title">;

const TitleScreen = () => {
    const navigation = useNavigation<NavigationProp>();

    // ボタンのアニメーション用
    const scaleAnim = new Animated.Value(1);

    const handlePressIn = () => {
        Animated.spring(scaleAnim, {
            toValue: 0.9, // 押した時に少し縮む
            useNativeDriver: true,
        }).start();
    };

    const handlePressOut = () => {
        Animated.spring(scaleAnim, {
            toValue: 1, // 戻る
            useNativeDriver: true,
        }).start(() => navigation.navigate("ModeSelect"));
    };

    return (
        <View style={TitleScreenStyles.container}>
            <Text style={TitleScreenStyles.title}>瞬間10メーカー</Text>
            <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
                <TouchableOpacity
                    style={TitleScreenStyles.button}
                    onPressIn={handlePressIn}
                    onPressOut={handlePressOut}
                >
                    <Text style={TitleScreenStyles.buttonText}>はじめる</Text>
                </TouchableOpacity>
            </Animated.View>
        </View>
    );
};

export default TitleScreen;