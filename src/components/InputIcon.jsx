import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { globalStyles } from '../theme/globalThemes'
import { Feather } from '@expo/vector-icons'; 

const InputIcon = () => {
  return (
    <View style={styles.container}>
        <Feather 
        name='eye-off'  
        size={21} 
        color={'rgba(255,255,255, 0.3)'}
        style={ styles.iconSearch }
        onPress={() => console.log('password')}
        />
          <TextInput
          style={globalStyles.inputText}
          placeholder="Password"
          placeholderTextColor={"rgba(255,255,255, 0.3)"}
          // poner los puntitos cuando completo la contraseña
          secureTextEntry={true}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container:  {
        marginVertical: 20,
        justifyContent: 'center',
    },
    iconSearch: {
        position: 'absolute',
        right: 30,
        zIndex: 9999999
    },
})

export default InputIcon
