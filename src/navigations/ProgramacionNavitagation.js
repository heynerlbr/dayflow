import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import DaysListScreen from "../screens/DaysListScreen";
import ProgramacionDia from "../screens/ProgramacionDia";
import RegistronDia from "../screens/RegistroprogramacionScreen";
import DetalleProgramacion from "../screens/DetalleProgramacionScreen";

const Stack = createStackNavigator();
export default function LoginNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Calendario"
        component={DaysListScreen}
        options={{ title: "", headerTransparent: true }}
      />
      <Stack.Screen
        name="ProgramacionDia"
        component={ProgramacionDia}
        options={{ title: "", headerTransparent: true }}
      />
        <Stack.Screen
        name="RegistronDia"
        component={RegistronDia}
        options={{ title: "", headerTransparent: true }}
      />

<Stack.Screen
        name="DetalleProgramacion"
        component={DetalleProgramacion}
        options={{ title: "", headerTransparent: true }}
      />

      {/* 
      <Stack.Screen
        name="register"
        component={DetallesScreen}
        options={{ title: "register" }}
      /> */}
    </Stack.Navigator>
  );
}
