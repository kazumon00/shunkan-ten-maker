import React from "react";
import { useNavigation } from "@react-navigation/native";
import {View, Text, TouchableOpacity} from "react-native";
import TitleScreenStyles from "@styles/TitleScreenStyles";
import { RootStackParamList } from "@types";
import { StackNavigationProp } from "@react-navigation/stack";

type NavigationProp = StackNavigationProp<RootStackParamList, "Title">;

const TitleScreen = () => {
    const navigation = useNavigation<NavigationProp>();
    return (
        <View style={TitleScreenStyles.container}>
            <Text style={TitleScreenStyles.title}>瞬間10メイカー</Text>
            <TouchableOpacity 
                style={TitleScreenStyles.button}
                onPress={() => navigation.navigate("ModeSelect")}
            >
                <Text style={TitleScreenStyles.buttonText}>ゲームスタート</Text>
            </TouchableOpacity>
        </View>
    );
};

export default TitleScreen;