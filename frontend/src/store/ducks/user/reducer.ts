import produce, { Draft } from 'immer';
import { UserState, LoadingState } from './state';
import { UserActions } from './actionCreators';
import { UserActionsType } from './actionTypes';

const initialUserState: UserState = {
   data: undefined,
   status: LoadingState.NEVER,
};

export const userReducer = produce((draft: Draft<UserState>, action: UserActions) => {
   switch (action.type) {
      case UserActionsType.SET_USER_DATA:
         draft.data = action.payload;
         draft.status = LoadingState.LOADED;
         break;

      case UserActionsType.SET_LOADING_STATE:
         draft.status = action.payload;
         break;

      default:
         break;
   }
}, initialUserState);
