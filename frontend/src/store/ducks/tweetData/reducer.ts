import produce, { Draft } from 'immer';
import { TweetDataState, LoadingState } from './state';
import { TweetDataActions } from './actionCreators';
import { TweetDataActionsType } from './actionTypes';

const initialTweetDataState: TweetDataState = {
   data: undefined,
   loadingState: LoadingState.NEVER,
};

export const tweetDataReducer = produce((draft: Draft<TweetDataState>, action: TweetDataActions) => {
   switch (action.type) {
      case TweetDataActionsType.SET_TWEET_DATA:
         draft.data = action.payload;
         draft.loadingState = LoadingState.LOADED;
         break;

      case TweetDataActionsType.FETCH_TWEET_DATA:
         draft.data = undefined;
         draft.loadingState = LoadingState.LOADING;
         break;

      case TweetDataActionsType.SET_LOADING_STATE:
         draft.loadingState = action.payload;
         break;

      default:
         break;
   }
}, initialTweetDataState);
