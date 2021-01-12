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

export const signUp = (userData, firebase) => {
    return((dispatch, getState) => {

        firebase.createUser(
            {
                email: userData.email,
                password: userData.password
            },
            //Profile data to be established in the Firestore DB for this user
            {
                firstName: userData.fName.charAt(0).toUpperCase() + userData.fName.slice(1).toLowerCase(),
                lastName: userData.lName.charAt(0).toUpperCase() + userData.lName.slice(1).toLowerCase(),
                initials: userData.fName.charAt(0).toUpperCase() + userData.lName.charAt(0).toUpperCase(),
            }
        )
        .then(resp => {
            dispatch({
                type: 'SIGNUP_SUCCESS'
            });
        })
        .catch(err => {
            dispatch({
                type: 'SIGNUP_ERROR',
                err
            });
        });
    });
};