import { TweetsState, LoadingState, Tweet, CreateTweetState } from './state';
import {
   ISetTweetsAction,
   TweetsActionsType,
   ISetTweetsLoadingStateAction,
   IFetchTweetsAction,
   IFetchCreateTweetAction,
   ICreateTweetAction,
   ICreateTweetStateAction,
} from './actionTypes';

// => ({ функция которая возвращает объект })
// функция которая получает TweetsState['items'] и возвращает объект ISetTweetsAction => ({})

export const setTweetsLoadingState = (payload: LoadingState): ISetTweetsLoadingStateAction => ({
   type: TweetsActionsType.SET_LOADING_STATE,
   payload,
});

export const fetchTweets = (): IFetchTweetsAction => ({
   type: TweetsActionsType.FETCH_TWEETS,
});

export const setTweets = (payload: TweetsState['items']): ISetTweetsAction => ({
   type: TweetsActionsType.SET_TWEETS,
   payload,
});
/////////////////////////////////////////////////////////////////////////////////////////
export const setCreateTweetState = (payload: CreateTweetState): ICreateTweetStateAction => ({
   type: TweetsActionsType.STATE_CREATE_TWEET,
   payload,
});

export const fetchCreateTweet = (payload: string): IFetchCreateTweetAction => {
   return {
      type: TweetsActionsType.FETCH_CREATE_TWEET,
      payload,
   };
};

export const CreateTweet = (payload: Tweet): ICreateTweetAction => {
   return {
      type: TweetsActionsType.CREATE_TWEET,
      payload,
   };
};
/////////////////////////////////////////////////////////////////////////////////////////

export type TweetsActions =
   | ISetTweetsAction
   | IFetchTweetsAction
   | ISetTweetsLoadingStateAction
   | ICreateTweetStateAction
   | IFetchCreateTweetAction
   | ICreateTweetAction;
