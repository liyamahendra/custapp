import { combineReducers } from 'redux';

import { LoginReducer } from './login.reducer';
import {CustomerReducer} from './customer.reducer';

const rootReducer = combineReducers({
   user: LoginReducer,
   customer:CustomerReducer
});

export default rootReducer;