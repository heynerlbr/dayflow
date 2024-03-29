import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import PerfilScreen from "../screens/PerfilScreen";

const Stack = createStackNavigator();
export default function LoginNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: "Login", headerTransparent: true }}
      />
      <Stack.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{ title: "Perfil", headerTransparent: true }}
      />
     
    
    </Stack.Navigator>
  );
}
