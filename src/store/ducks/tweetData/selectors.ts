import { RootState } from '../../store';
import { TweetDataState } from './state';

export const selectTweetData = (state: RootState): TweetDataState => state.tweetData;

export const selectTweetDataItems = (state: RootState): TweetDataState['data'] => selectTweetData(state).data;
