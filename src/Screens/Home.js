import React from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import AwesomeIcon from "react-native-vector-icons/FontAwesome";

function Home() {
  return (
    <SafeAreaView>
      <View className="flex flex-row justify-between items-center mt-10 p-5">
        <Text className="text-2xl font-bold text-black-600 bg-gray-100 rounded p-2  ">
          Dahir Moha
        </Text>
        <Icon name="notifications-circle-outline" size={50} color="#ccc" />
      </View>
      <View className="flex flex-row justify-center items-center  bg-[#FFFFFF] rounded-lg p-2 ml-4 mr-4 border-2 border-green">
        <Icon name="search" size={30} color="#ccc" />
        <TextInput
          className="flex-1 pl-2"
          placeholder="Search..."

          // value={UserInputs.password}

          // onChangeText={handlePress("password"
        />
      </View>
      <View className="flex flex-row justify-between items-center  bg-[#FFFFFF] rounded-lg p-2 ml-2 mr-2  mt-10">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity className="flex-col  items-center mb-2   ">
            <Text className="text-base text-4xl mb-4">🍕</Text>
            <Text className="text-base">Pizza</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-col items-center mb-2 pl-10">
            <Text className="text-base text-4xl mb-4">🍔</Text>
            <Text className="text-base">Burger</Text>
          </TouchableOpacity>
          <TouchableOpacity className="fflex-col items-center mb-2 pl-10">
            <Text className="text-base text-4xl mb-4">🎂</Text>
            <Text className="text-base "> Cake</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-col items-center mb-2 pl-10">
            <Text className="text-base text-4xl mb-4">🥗</Text>
            <Text className="text-base">Salas</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default Home;
