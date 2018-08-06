import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import addressReducer from './address.reducer';

export default combineReducers({
    userInfo: userReducer,
    address: addressReducer
});
