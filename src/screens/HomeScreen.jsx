import React from 'react'
import { View, Text, Button } from 'react-native'

const HomeScreen = ({navigation}) => {
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  }}>
        <Button 
        title='Ir a productos'
        onPress={() => navigation.navigate('ProductsScreen', {
          id: 200,
          name: 'Zapatillas'
        })}></Button>
    </View>
  )
}

export default HomeScreen
