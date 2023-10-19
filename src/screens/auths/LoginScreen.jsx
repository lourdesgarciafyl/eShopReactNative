import React, { useContext } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View, Image, Alert } from "react-native";
import { globalStyles } from "../../theme/globalThemes";
import { TextInput } from "react-native-gesture-handler";
import InputIcon from "../../components/InputIcon";
import CustomModal from "../../components/CustomModal";
import { AuthContext } from "../../contexts/AuthContext";

const LoginScreen = () => {

  const { login, state } = useContext(AuthContext);

  const isLogin = () => {
    console.log('aqui');

    login(
      'juanperez@gmail.com',
      '12345678Aa')
      
  }

  // se usa dentro de un useEffect normalmente
  // const showAlert = () => {
  //   Alert.alert(
  //     "Error de acceso",
  //     "Datos ingresador son incorrectos",
  //     [
  //       {
  //         text: "Cancelar",
  //         onPress: () => console.log("Cancelar"),
  //         style: "cancel"
  //       },
  //       {
  //         text: "Ok",
  //         onPress: () => console.log("Ok"),
  //         style: "default"
  //       }
  //   ]
  //   )
  // }

  return (
    <>
     <View style={[globalStyles.container, { justifyContent: "center" }]}>
      <View>
        <Image style={styles.logo} source={require("../../assets/eShop.png")} />
      </View>

      <View>
        <TextInput
          style={globalStyles.inputText}
          placeholder="Email"
          placeholderTextColor="rgba(255,255,255, 0.3)"
        />
        <InputIcon />       
      </View>

      <View>
        <TouchableOpacity 
        style={globalStyles.touchableBtn} 
        onPress={isLogin}

        >
          <Text style={globalStyles.textBtn}>Ingresar</Text>
        </TouchableOpacity>
      </View>
    </View>

    <CustomModal />
    </>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 230,
    height: 230,
    alignSelf: "center",
  },
  iconSearch: {
    position: 'absolute',
    right: 30,
    zIndex: 9999999
},
});

export default LoginScreen;
