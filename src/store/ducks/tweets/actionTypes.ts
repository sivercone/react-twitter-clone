import { TweetsState, LoadingState, Tweet } from './state';
import { Action } from 'redux';

export enum TweetsActionsType {
   SET_TWEETS = 'tweet/SET_TWEETS',
   FETCH_TWEETS = 'tweet/FETCH_TWEETS',
   SET_LOADING_STATE = 'tweet/SET_LOADING_STATE',
   FETCH_CREATE_TWEET = 'tweet/FETCH_CREATE_TWEET',
   CREATE_TWEET = 'tweet/CREATE_TWEET',
}

export interface ISetTweetsAction extends Action<TweetsActionsType> {
   type: TweetsActionsType.SET_TWEETS;
   payload: TweetsState['items'];
}

export interface ISetTweetsLoadingStateAction extends Action<TweetsActionsType> {
   type: TweetsActionsType.SET_LOADING_STATE;
   payload: LoadingState;
}

export interface IFetchTweetsAction extends Action<TweetsActionsType> {
   type: TweetsActionsType.FETCH_TWEETS;
}

//////////////////////////////////////////////////////////////////////////////////////////////////
export interface IFetchCreateTweetAction extends Action<TweetsActionsType> {
   type: TweetsActionsType.FETCH_CREATE_TWEET;
   payload: string;
}

export interface ICreateTweetAction extends Action<TweetsActionsType> {
   type: TweetsActionsType.CREATE_TWEET;
   payload: Tweet;
}
//////////////////////////////////////////////////////////////////////////////////////////////////
