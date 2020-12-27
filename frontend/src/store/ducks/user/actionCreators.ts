import { UserState } from './state';
import {
   SetUserDataActionInterface,
   UserActionsType,
   SetUserLoadingStateInterface,
   FetchSignInActionInterface,
   FetchSignUpActionInterface,
} from './actionTypes';
import { LoginFormProps } from '../../../pages/sign/Login';
import { RegisterFormProps } from '../../../pages/sign/SignUp';

export const setUserData = (payload: UserState['data']): SetUserDataActionInterface => ({
   type: UserActionsType.SET_USER_DATA,
   payload,
});

export const setUserLoadingState = (payload: UserState['status']): SetUserLoadingStateInterface => ({
   type: UserActionsType.SET_LOADING_STATE,
   payload,
});

export const fetchSignIn = (payload: LoginFormProps): FetchSignInActionInterface => ({
   type: UserActionsType.FETCH_SIGN_IN,
   payload,
});

export const fetchSignUp = (payload: RegisterFormProps): FetchSignUpActionInterface => ({
   type: UserActionsType.FETCH_SIGN_UP,
   payload,
});

export type UserActions =
   | SetUserDataActionInterface
   | SetUserLoadingStateInterface
   | FetchSignInActionInterface
   | FetchSignUpActionInterface;
