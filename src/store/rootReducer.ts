import { combineReducers } from 'redux';
import { tweetsReducer } from './ducks/tweets/contracts/reducer';

export const rootReducer = combineReducers({
   tweets: tweetsReducer,
});
