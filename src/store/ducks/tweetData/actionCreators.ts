import { TweetDataState, LoadingState } from './state';
import { TweetDataActionsType, ISetTweetDataAction, ISetTweetLoadingStateAction, IFetchTweetDataAction } from './actionTypes';

export const setTweetData = (payload: TweetDataState['data']): ISetTweetDataAction => ({
   type: TweetDataActionsType.SET_TWEET_DATA,
   payload,
});

export const setTweetDataLoadingState = (payload: LoadingState): ISetTweetLoadingStateAction => ({
   type: TweetDataActionsType.SET_LOADING_STATE,
   payload,
});

export const fetchTweetData = (payload: string): IFetchTweetDataAction => ({
   type: TweetDataActionsType.FETCH_TWEET_DATA,
   payload,
});

export type TweetDataActions = ISetTweetDataAction | IFetchTweetDataAction | ISetTweetLoadingStateAction;
