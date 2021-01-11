export const signIn = (credentials, firebase) => {
    return ((dispatch, getState) => {
       
        firebase.login({
            email: credentials.email,
            password: credentials.password
        })
        .then(resp => {
            dispatch({
                type: 'LOGIN_SUCCESS',
            });
        })
        .catch(err => {
            dispatch({
                type: 'LOGIN_ERROR',
                err
            });
        });
    });
};

export const signOut = (firebase) => {
    return ((dispatch, getState) => {
       
        firebase.logout()
        .then(resp => {
            dispatch({
                type: 'LOGOUT_SUCCESS',
            });
        });
    });
};