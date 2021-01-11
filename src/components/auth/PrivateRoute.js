import { useSelector } from 'react-redux';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import { Route, Redirect } from 'react-router-dom';

//Helper component to check if user is signed in before accessing the associated route, if not, redirect the user to the sign in page
//Checks if the auth functionality is done loading and the Firebase auth property is not empty
export default function PrivateRoute({children, ...rest}){
    const auth = useSelector(state => state.firebase.auth);

    return(
        isLoaded(auth) && !isEmpty(auth) ? (
            <Route {...rest} />
        )
        :
        <Redirect to='/signin' />
    );

};