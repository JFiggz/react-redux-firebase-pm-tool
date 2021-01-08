import authReducer from './authReducer';
import projReducer from './projReducer';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer  } from 'redux-firestore';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    project: projReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
});

export default rootReducer;