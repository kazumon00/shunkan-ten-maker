import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TitleScreen from "@screens/TitleScreen";
import ModeSelectScreen from "@screens/ModeSelectScreen";
import GameScreen from "@screens/GameScreen";
import GameScreen2 from "@screens/GameScreen2";
import GameScreen3 from "@screens/GameScreen3";
import ResultScreen from "@screens/ResultScreen";
import { RootStackParamList } from "@types";

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Title">
        <Stack.Screen name="Title" component={TitleScreen} options={{title: "タイトル画面"}}/>
        <Stack.Screen name="ModeSelect" component={ModeSelectScreen} options={{title: "モード選択画面"}}/>
        <Stack.Screen name="Game1" component={GameScreen} options={{title: "ゲーム画面1"}}/>
        <Stack.Screen name="Game2" component={GameScreen2} options={{title: "ゲーム画面2"}}/>
        <Stack.Screen name="Game3" component={GameScreen3} options={{title: "ゲーム画面3"}}/>
        <Stack.Screen name="Result" component={ResultScreen} options={{title: "リザルト画面"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};