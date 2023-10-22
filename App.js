import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { DrawerNavigator } from './src/navigators/DrawerNavigator';
import { AuthProvider } from './src/providers/AuthProvider';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={'#f2058b'} />
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
