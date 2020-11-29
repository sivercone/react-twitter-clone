import { Tweet } from '../tweets/state';

export enum LoadingState {
   LOADING = 'LOADING',
   LOADED = 'LOADED',
   ERROR = 'ERROR',
   NEVER = 'NEVER',
}

export interface TweetDataState {
   data?: Tweet;
   loadingState: LoadingState;
}
