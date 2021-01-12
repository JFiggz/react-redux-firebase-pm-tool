import { useSelector } from 'react-redux';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import { Route, Redirect } from 'react-router-dom';

//Helper component to check if user is signed in before routing. Used to protect the signup and signin routes once a user has signed in. Redirect the user to the homepage.
//Checks if the auth functionality is done loading and the Firebase auth property is empty.
export function RouteGuard(props){
    const auth = useSelector(state => state.firebase.auth);

    return(
        isLoaded(auth) && isEmpty(auth) ? (
            <Route {...props} />
        )
        :
        <Redirect to='/' />
    );
};


//Helper component to check if user is signed in before accessing routes requiring authentication, if not, redirect the user to the sign in page.
//Checks if the auth functionality is done loading and the Firebase auth property is not empty.
export default function PrivateRoute(props){
    const auth = useSelector(state => state.firebase.auth);

    return(
        isLoaded(auth) && !isEmpty(auth) ? (
            <Route {...props} />
        )
        :
        <Redirect to='/signin' />
    );

};