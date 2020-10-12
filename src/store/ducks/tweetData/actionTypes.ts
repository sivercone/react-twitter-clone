import { Action } from 'redux';
import { TweetDataState, LoadingState } from './state';

export enum TweetDataActionsType {
   SET_TWEET_DATA = 'tweet/SET_TWEET_DATA',
   FETCH_TWEET_DATA = 'tweet/FETCH_TWEET_DATA',
   SET_LOADING_STATE = 'tweet/SET_LOADING_STATE',
   SET_DATA = 'SET_DATA',
}

export interface ISetTweetDataAction extends Action<TweetDataActionsType> {
   type: TweetDataActionsType.SET_TWEET_DATA;
   payload: TweetDataState['data'];
}

export interface IFetchTweetDataAction extends Action<TweetDataActionsType> {
   type: TweetDataActionsType.FETCH_TWEET_DATA;
   payload: string;
}

export interface ISetTweetLoadingStateAction extends Action<TweetDataActionsType> {
   type: TweetDataActionsType.SET_LOADING_STATE;
   payload: LoadingState;
}
