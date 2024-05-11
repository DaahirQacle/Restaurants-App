import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/Screens/Home";
import { Image } from "react-native";
import { FoodData } from "./data";

export default function App() {
  console.log(FoodData);
  return (
    <View className="flex-1 bg-[#F2F4F4] mt-20">
      <Image source={FoodData[6]?.image} style={{ width: 100, height: 100 }} />
      <Text>{FoodData[0]?.rating}</Text>
    </View>
  );
}
