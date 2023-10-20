import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { useContext, useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/auths/ProfileScreen';
import TabsNavigator from './TabsNavigator';
import LoginScreen from '../screens/auths/LoginScreen';
import { AuthContext } from '../contexts/AuthContext';
import { CustomLoading } from '../components/CustomLoading';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {

  const {state, checkToken} = useContext(AuthContext)
  
  useEffect( () => {
    checkToken();
  }, [])

  if(state.isLoading) {
    return <CustomLoading />
  }

  if(state.isLogged) {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name='HomeScreen' options={{ title: 'Home'}} component={TabsNavigator}/>
        <Drawer.Screen name='ProfileScreen' options={{ title: 'Mi Perfil'}} component={ProfileScreen}/>
      </Drawer.Navigator>
    )
  }
  if(!state.isLogged) {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name='HomeScreen' options={{ title: 'Login', headerShown: false}} component={LoginScreen}/>
        {/* <Drawer.Screen name='ProfileScreen' options={{ title: 'Mi Perfil'}} component={ProfileScreen}/> */}
      </Drawer.Navigator>
    )
  }
}
