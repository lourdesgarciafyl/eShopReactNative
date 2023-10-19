import React, { useState } from 'react'
import { Modal, Pressable, Text, View } from 'react-native'
import { globalStyles } from '../theme/globalThemes'

const CustomModal = () => {
  const [visible, setVisible] = useState(true)
  return (
    <View>
        <Modal
        animationType='slide'
        visible={visible}
        transparent={true}
        hardwareAccelerated={true}

        >
            <View style={{
                flex:1,
                justifyContent: "center",
            }}>
                <View style={{
                  backgroundColor: "white", 
                  alignItems: "center", 
                  margin: 30,
                  padding: 40,
                  borderRadius: 10,
                  shadowColor: '0000',
                  elevation: 2,
                  shadowOffset: {
                    width: 0,
                    height: 2
                  }
                  }}>
                <Text style={{
                  color: "black",
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginVertical: 10
                  }}>Error de acceso</Text>

                  <Text style={{fontSize: 15, textAlign: 'center', color: "black",}}>No se pudo ejecutar la acción</Text>
                  <View>
                  <Pressable style={globalStyles.touchableBtn} onPress={() => setVisible(!visible)}>

                    <Text style={globalStyles.textBtn}>Cerrar</Text>
                  
                  </Pressable>
                </View>

              </View>
            </View>
        </Modal>
    </View>
  )
}

export default CustomModal
