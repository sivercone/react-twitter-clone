import { TweetsState, LoadingState } from './state';
import { ISetTweetsAction, TweetsActionsType, ISetTweetsLoadingStateAction, IFetchTweetsAction } from './actionTypes';

// => ({ функция которая возвращает объект })
// функция которая получает TweetsState['items'] и возвращает объект ISetTweetsAction => ({})
export const setTweets = (payload: TweetsState['items']): ISetTweetsAction => ({
   type: TweetsActionsType.SET_TWEETS,
   payload,
});

export const setTweetsLoadingState = (payload: LoadingState): ISetTweetsLoadingStateAction => ({
   type: TweetsActionsType.SET_LOADING_STATE,
   payload,
});

export const fetchTweets = (): IFetchTweetsAction => ({
   type: TweetsActionsType.FETCH_TWEETS,
});

export type TweetsActions = ISetTweetsAction | IFetchTweetsAction | ISetTweetsLoadingStateAction;
