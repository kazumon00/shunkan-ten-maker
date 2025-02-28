import AsyncStorage from "@react-native-async-storage/async-storage";

// 各モードごとのハイスコアのキー
const HIGH_SCORE_KEYS = {
  Game1: "HIGH_SCORE_GAME1",
  Game2: "HIGH_SCORE_GAME2",
  Game3: "HIGH_SCORE_GAME3",
};

// ハイスコアを取得する関数
export const getHighScore = async (mode: number): Promise<number> => {
  try {
    const key = HIGH_SCORE_KEYS[`Game${mode}` as keyof typeof HIGH_SCORE_KEYS];
    const storedScore = await AsyncStorage.getItem(key);
    return storedScore ? parseInt(storedScore, 10) : 0;
  } catch (error) {
    console.error("ハイスコアの取得に失敗:", error);
    return 0;
  }
};

// ハイスコアを更新する関数
export const updateHighScore = async (mode: number, score: number) => {
  try {
    const key = HIGH_SCORE_KEYS[`Game${mode}` as keyof typeof HIGH_SCORE_KEYS];
    const currentHighScore = await getHighScore(mode);
    if (score > currentHighScore) {
      await AsyncStorage.setItem(key, score.toString());
    }
  } catch (error) {
    console.error("ハイスコアの更新に失敗:", error);
  }
};