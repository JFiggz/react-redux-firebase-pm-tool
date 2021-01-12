const initState = {
    authError: null,
    errMessage: '',
};

const authReducer = (state = initState, action) => {

    switch (action.type){

        case 'LOGIN_SUCCESS':
            return ({
                ...state,
                authError: null,
                errMessage: '',
            });

        case 'LOGIN_ERROR':
            return ({
                ...state,
                authError: true,
                errMessage: action.err.message,
            });

        case 'LOGOUT_SUCCESS':
            return ({
                ...state,
                authError: null,
                errMessage: '',
            });

        case 'SIGNUP_SUCCESS':
            return ({
                ...state,
                authError: null,
                errMessage: '',
            });

        case 'SIGNUP_ERROR':
            return ({
                ...state,
                authError: true,
                errMessage: action.err.message,
            });

        default:
            return state;  
    };
};

export default authReducer;