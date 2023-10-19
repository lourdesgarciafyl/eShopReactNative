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
            const user = await eShopApiUrl.post("/auth/login", {
                email,
                password
            });
            console.log(user.data)
    
            await AsyncStorage.setItem('e-token', user.data.res.token);
    
            dispatch({
                type: 'LOGIN',
                payload: {
                    user: user.data.res
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
            const {data} = await eShopApiUrl.get("/auth/revalidatetoken")
            console.log(data)

        } catch (error) {

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