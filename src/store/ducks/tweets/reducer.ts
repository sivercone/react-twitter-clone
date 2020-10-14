import produce, { Draft } from 'immer';
import { TweetsState, LoadingState, CreateTweetState } from './state';
import { TweetsActions } from './actionCreators';
import { TweetsActionsType } from './actionTypes';

const initialTweetsState: TweetsState = {
   items: [],
   loadingState: LoadingState.NEVER,
   createTweetState: CreateTweetState.NEVER,
};

export const tweetsReducer = produce((draft: Draft<TweetsState>, action: TweetsActions) => {
   switch (action.type) {
      case TweetsActionsType.FETCH_TWEETS:
         draft.items = [];
         draft.loadingState = LoadingState.LOADING;
         break;

      case TweetsActionsType.SET_TWEETS:
         draft.items = action.payload;
         draft.loadingState = LoadingState.LOADED;
         break;

      case TweetsActionsType.SET_LOADING_STATE:
         draft.loadingState = action.payload;
         break;

      case TweetsActionsType.FETCH_CREATE_TWEET:
         draft.createTweetState = CreateTweetState.LOADING;
         break;

      case TweetsActionsType.CREATE_TWEET:
         draft.items.push(action.payload);
         draft.createTweetState = CreateTweetState.NEVER;
         break;

      default:
         break;
   }
}, initialTweetsState);
