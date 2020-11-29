import { RootState } from '../../store';
import { TweetDataState } from './state';
import { Tweet } from '../tweets/state';

export const selectTweetData = (state: RootState): TweetDataState => state.tweetData;

export const selectTweetDataItems = (state: RootState): Tweet | undefined => selectTweetData(state).data;
