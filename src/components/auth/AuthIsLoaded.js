import { useSelector } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';

//Helper component to handle logic to check if Firebase authentication functionality is loaded and ready before rendering the app 
export default function AuthIsLoaded({children}){
  const auth = useSelector(state => state.firebase.auth);

  if(!isLoaded(auth)){
    return <h1 className="proj-detail__title">Loading Application...</h1>
  }

  return children;
};