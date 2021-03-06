import { combineReducers } from 'redux';
import { tweetsReducer } from './ducks/tweets/reducer';
import { tagsReducer } from './ducks/tags/reducer';
import { tweetDataReducer } from './ducks/tweetData/reducer';
import { userReducer } from './ducks/user/reducer';
import { usersReducer } from './ducks/users/reducer';

export const rootReducer = combineReducers({
   tweets: tweetsReducer,
   tags: tagsReducer,
   tweetData: tweetDataReducer,
   user: userReducer,
   users: usersReducer,
});
