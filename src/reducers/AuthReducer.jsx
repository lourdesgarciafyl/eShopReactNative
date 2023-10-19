export const AuthReducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload.user,
                isLogged: true,
                isLoading: false,
                errorMessage: ''
            }

        case 'ERROR':
            return {
                ...state,
                user: null,
                isLogged: false,
                isLoading: false,
                errorMessage: action.payload.errorMessage
            } 
        
        case 'LOGOUT': 
            return  {
                ...state,
                user: null,
                isLogged: false,
                isLoading: false,
                errorMessage: ''
            } 
        default:
            return state;
    }
}