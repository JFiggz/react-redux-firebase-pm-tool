import authReducer from './authReducer';
import projReducer from './projReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    project: projReducer,
});

export default rootReducer;