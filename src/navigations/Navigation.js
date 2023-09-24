import React from "react";
import { Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import LoginNavigation from "./LoginNavigation";
import ProgramacionNavitagation from "./ProgramacionNavitagation";


const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Inicio"
        component={LoginNavigation}
        options={{
          tabBarLabel: "Inicio",
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
   
    </Tab.Navigator>
  );
};

export default Navigation;
