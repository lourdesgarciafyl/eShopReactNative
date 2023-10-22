import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {StackNavigator} from "./StackNavigator";
import {ProfileScreen} from "../screens/auths/ProfileScreen";
import {SearchProductScreen} from "../screens/products/SearchProductScreen";

const Tab = createBottomTabNavigator();

export const TabsNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: '#000',
        borderTopColor: '#000',
        borderTopWidth: 2
      },
      tabBarLabelStyle: {
        fontSize: 15,
        color: '#fff',
        textAlign: 'center'
      },
      tabBarIndicatorStyle: {
        borderBottomColor: '#C2D5A8',
        borderBottomWidth: 2,
      },
      tabBarActiveTintColor: '#f2058b',
    }}>

      <Tab.Screen
        name="StackNavigator"
        component={StackNavigator}
        options={{
          title: "Productos",
          // tabBarIcon devuelve un componente jsx
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="home-circle" // cual es el icono que quiero cargar
              color={"rgba(255, 255,255,0.3)"}
              size={28}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: "Mi Perfil",
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="face-man-profile"
              color={"rgba(255, 255,255,0.3)"}
              size={28}
            />
          ),
        }}
      />
      <Tab.Screen
      name="SearchProductScreen"
      component={SearchProductScreen}
      options={{ 
        title:'Buscar',
        tabBarIcon: () => (
            <MaterialCommunityIcons 
            name="note-search" 
            color={'rgba(255, 255,255,0.3)'} 
            size={28}/>
        )
    }} 
      />
    
    </Tab.Navigator>
  );
};
