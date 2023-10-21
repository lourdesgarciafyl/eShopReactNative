import React from 'react'
import { FlatList, Text, TextInput, View } from 'react-native'
import {globalStyles} from "../../theme/globalThemes"
import ItemProducts from '../../components/products/ItemProducts'
import { searchData } from '../../data/searchData'
import InputSearch from '../../components/products/InputSearch'

export const SearchProductScreen = () => {
  return (
    <View style={globalStyles.container}>
        
        {/* para hacer un text input que quede fijo aunque se haga scroll, es una opcion
        <TextInput
        />
         */}
        <InputSearch /> 
        <FlatList
        data={searchData}
        renderItem={({item}) => <ItemProducts item={item}/>}
        keyExtractor={item => item.id} 
        
        // ListHeaderComponent={}   devuelve un componente, el cual desaparece cuando hacemos scroll, puede funcionar como un buscador
        />
    </View>
  )
}
