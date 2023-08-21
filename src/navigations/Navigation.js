import React from "react";
import { Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import LoginNavigation from "./LoginNavigation";
import ProgramacionNavitagation from "./ProgramacionNavitagation";
import PerfilScreen from "../screens/Perfil";
import DaysListScreen from "../screens/DaysListScreen";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Login"
        component={LoginNavigation}
        options={{
          tabBarLabel: "Login",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Programacion"
        component={ProgramacionNavitagation}
        options={{
          tabBarLabel: "Programacion",
          tabBarIcon: ({ color, size }) => (
            <Icon name="list" size={size} color={color} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Calendario"
        component={DaysListScreen}
        options={{
          tabBarLabel: "Calendario",
          tabBarIcon: ({ color, size }) => (
            <Icon name="list" size={size} color={color} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default Navigation;
