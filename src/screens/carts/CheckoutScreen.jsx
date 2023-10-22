import React from 'react'
import { Button, Text, View } from 'react-native'

export const CheckoutScreen = ({navigation}) => {
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  }}>
      <View>
          <Button 
              title='Ir a Inicio'
              onPress={() => navigation.popToTop()} // va a la pagina inciial del Stack en cuestion
          />
      </View>

      <View style={{ marginVertical: 10}}>    
          <Button 
              title='Atras'
              onPress={() => navigation.pop()} // va a la pagina anterior segun el orden en el Stack
          />
      </View>
  </View>
  )
}
