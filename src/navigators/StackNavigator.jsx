import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import {HomeScreen} from '../screens/HomeScreen'
import {CheckoutScreen} from '../screens/carts/CheckoutScreen'
import {ProductsScreen} from '../screens/products/ProductsScreen'

const Stack = createStackNavigator()

export const StackNavigator = () => {
  return (
  <Stack.Navigator  
  // initialRouteName='ProductsScreen'
  screenOptions={{
      headerShown: true, // si pongo false, no aparece el titulo arriba a la izquierda
      cardStyle: {
          backgroundColor: 'white'
      }, 
      headerStyle: {
        borderBottomColor: '#000', // color de linea divisoria
        borderBottomWidth: 1,
        elevation: 0,
        shadowColor: '#000', // sombra de la linea
    }
}}>
    <Stack.Screen name='HomeScreen' component={HomeScreen}/>
    <Stack.Screen name='CheckoutScreen' component={CheckoutScreen}/>
    <Stack.Screen name='ProductsScreen' component={ProductsScreen}/>

  </Stack.Navigator>
  )
}
