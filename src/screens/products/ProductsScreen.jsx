import React from 'react'
import { View, Text, Button } from 'react-native'

const ProductsScreen = (props) => {
  const {navigation, route} = props
  const {params} = route 

  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  }}>
       <Button
       title='Ir a checkout'
       onPress={() => navigation.navigate('CheckoutScreen')}></Button> 
      <Text>ID: {params.id}</Text>
      <Text> Name: {params.name}</Text>
    </View>
  )
}

export default ProductsScreen
