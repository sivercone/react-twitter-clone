// для удобства, вытаскивать данные которые необходимы

import { RootState } from '../../store';
import { TweetsState } from './state';

export const selectTweetsState = (state: RootState): TweetsState => state.tweets;
// export const selectLoadingState = (state: RootState) => selectTweets(state).loadingState;

// export const selectCreateTweetState = (state: RootState): CreateTweetState => selectTweets(state).createTweetState;

// export const selectTweetsItems = createSelector(selectTweets, (tweets) => tweets.items);
export const selectTweetsItems = (state: RootState) => selectTweetsState(state).items;
