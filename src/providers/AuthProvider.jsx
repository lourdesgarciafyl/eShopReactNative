import { useReducer } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { AuthReducer } from "../reducers/AuthReducer"
import { eShopApiUrl } from "../config/eShopApi"
import {AsyncStorage} from "@react-native-async-storage/async-storage"

const initialState = {
    user: null,
    isLogged: false,
    isLoading: true,
    errorMessage: ''
}
export const AuthProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    const login = async (email, password) => {
        try {
            const { data } = await eShopApiUrl.post("auth/login", {
                email,
                password
            });
            console.log(data)
            await AsyncStorage.setItem('e-token', data.token);
            dispatch({
                type: 'LOGIN',
                payload: {
                    user: data
                }
            })
        } catch (error) {
            dispatch({
                type: 'ERROR',
                payload: {
                    errorMessage: error.response.data.msg
                }
            })
        }
    } 

    const checkToken = async () => {
        try {
            const token = await AsyncStorage.getItem('e-token')
            if (!token) { 
                dispatch({
                    type: 'LOGOUT'
                })
            }
            const {data} = await eShopApiUrl.get("auth/revalidatetoken")
            console.log('token' ,data.token)
            dispatch({
                type: 'LOGIN',
                payload: {
                    user: data
                }
            })
        } catch (error) {
            dispatch({
                type: 'LOGOUT'
            })
        }
    }
    return (
        <AuthContext.Provider value={{
            state,
            login,
            checkToken 
        }}     
        >
            { children }
        </AuthContext.Provider>
    )
}