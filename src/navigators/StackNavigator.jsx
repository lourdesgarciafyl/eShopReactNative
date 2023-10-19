import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import HomeScreen from '../screens/HomeScreen'
import CheckoutScreen from '../screens/carts/CheckoutScreen'
import ProductsScreen from '../screens/products/ProductsScreen'

const Stack = createStackNavigator()

const StackNavigator = () => {
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
    <Stack.Screen name='HomeScreen' options={{title: 'Inicio'}} component={HomeScreen}/>
    <Stack.Screen name='CheckoutScreen' options={{title: 'Checkout!'}}  component={CheckoutScreen}/>
    <Stack.Screen name='ProductsScreen' options={{title: 'Productos'}}  component={ProductsScreen}/>

  </Stack.Navigator>
  )
}

export default StackNavigator
