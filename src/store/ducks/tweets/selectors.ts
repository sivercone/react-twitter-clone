// для удобства, вытаскивать данные которые необходимы

import { RootState } from '../../store';
import { TweetsState } from './state';
import { createSelector } from 'reselect';

export const selectTweets = (state: RootState): TweetsState => state.tweets;
// export const selectLoadingState = (state: RootState) => selectTweets(state).loadingState;

// export const selectCreateTweetState = (state: RootState): CreateTweetState => selectTweets(state).createTweetState;

export const selectTweetsItems = createSelector(selectTweets, (tweets) => tweets.items);
