import { TweetsState, LoadingState } from './state';
import { Action } from 'redux';

export enum TweetsActionsType {
   SET_TWEETS = 'tweet/SET_TWEETS',
   FETCH_TWEETS = 'tweet/FETCH_TWEETS',
   SET_LOADING_STATE = 'tweet/SET_LOADING_STATE',
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
