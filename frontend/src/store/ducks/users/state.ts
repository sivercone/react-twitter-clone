import { UserInterface } from '../user/state';

export enum LoadingState {
   LOADING = 'LOADING',
   LOADED = 'LOADED',
   ERROR = 'ERROR',
   NEVER = 'NEVER',
}

export interface UsersState {
   items: UserInterface[];
   loadingState: LoadingState;
}
