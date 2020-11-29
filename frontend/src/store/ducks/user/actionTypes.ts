import { Action } from 'redux';
import { UserInterface, LoadingState } from './state';
import { LoginFormProps } from '../../../pages/sign/Login';

export enum UserActionsType {
   SET_USER_DATA = 'user/SET_USER_DATA',
   SET_LOADING_STATE = 'user/SET_LOADING_STATE',
   FETCH_SIGN_IN = 'user/FETCH_SIGN_IN',
}

export interface SetUserDataActionInterface extends Action<UserActionsType> {
   type: UserActionsType.SET_USER_DATA;
   payload: UserInterface | undefined;
}

export interface SetUserLoadingStateInterface extends Action<UserActionsType> {
   type: UserActionsType.SET_LOADING_STATE;
   payload: LoadingState;
}

export interface FetchSignInActionInterface extends Action<UserActionsType> {
   type: UserActionsType.FETCH_SIGN_IN;
   payload: LoginFormProps;
}
