import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/Home";
import OptionsScreen from "./screens/Options";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Gerar Manicaca" }} />
        <Stack.Screen name="Options" component={OptionsScreen} options={{ title: "Escolher Opções" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}