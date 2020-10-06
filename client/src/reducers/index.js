import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userProfileReducer from './userProfileReducer';



const rootReducer = combineReducers({
    auth: authReducer,
    profile: userProfileReducer
})

export default rootReducer;