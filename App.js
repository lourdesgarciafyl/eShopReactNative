import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import StackNavigator from './src/navigators/StackNavigator';
import TabsNavigator from './src/navigators/TabsNavigator';
import { DrawerNavigator } from './src/navigators/DrawerNavigator';
import { AuthProvider } from './src/providers/AuthProvider';



export default function App() {
  return (
    <>
    {/* <StatusBar backgroundColor={'#f2058b'}> */}
    <AuthProvider>
    <NavigationContainer>
      {/* Se permite una sola navegacion  aqui*/}
      <DrawerNavigator />
    </NavigationContainer>
    </AuthProvider>
    {/* </StatusBar> */}
    </>
  );
}

