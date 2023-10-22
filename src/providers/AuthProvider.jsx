import { useReducer } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { AuthReducer } from '../reducers/AuthReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { eShopApiUrl } from '../config/eShopApi';

const initialState = {
  user: null,
  isLogged: false,
  isLoading: true,
  errorMessage: '',
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  //   LOGIN DE USUARIO
  const login = async (email, password) => {
    try {
      const { data } = await eShopApiUrl.post('auth/login', {
        email,
        password,
      });

      await AsyncStorage.setItem('e-token', data.token);
      dispatch({
        type: 'LOGIN',
        payload: {
          user: data,
        },
      });
    } catch (error) {
      console.log(error);
      const { msg } = error.response.data.errores[0];
      dispatch({
        type: 'ERROR',
        payload: {
          errorMessage: msg,
        },
      });
    }
  };

  //   REVALIDAR TOKEN
  const checkToken = async () => {
    try {
      const token = await AsyncStorage.getItem('e-token');

      if (!token) {
        dispatch({
          type: 'LOGOUT',
        });
      }
      const { data } = await eShopApiUrl.get('auth/revalidatetoken');
      console.log(data);

      // dispatch({
      //   type: 'LOGIN',
      //   payload: {
      //     user: data,
      //   },
      // });
    } catch (error) {
      console.log(error);
      dispatch({
        type: 'LOGOUT',
      });
    }
  };

  return (
    <AuthContext.Provider value={{ state, login, checkToken }}>
      {children}
    </AuthContext.Provider>
  );
};
