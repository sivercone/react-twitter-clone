import { takeLatest, call, put } from 'redux-saga/effects';
import { LoadingState } from './state';
import { FetchSignInActionInterface, UserActionsType, FetchSignUpActionInterface } from './actionTypes';
import { AuthApi } from '../../../services/api/authApi';
import { setUserData, setUserLoadingState } from './actionCreators';

export function* fetchSignInRequest({ payload }: FetchSignInActionInterface) {
   try {
      const data = yield call(AuthApi.signIn, payload);
      yield put(setUserData(data));
      window.localStorage.setItem('token', data.data.token);
   } catch (error) {
      yield put(setUserLoadingState(LoadingState.ERROR));
   }
}

export function* fetchSignUpRequest({ payload }: FetchSignUpActionInterface) {
   try {
      yield put(setUserLoadingState(LoadingState.LOADING));
      yield call(AuthApi.signUp, payload);
      yield put(setUserLoadingState(LoadingState.SUCCESS));
   } catch (error) {
      yield put(setUserLoadingState(LoadingState.ERROR));
   }
}

export function* UserSaga() {
   yield takeLatest(UserActionsType.FETCH_SIGN_IN, fetchSignInRequest);
   yield takeLatest(UserActionsType.FETCH_SIGN_UP, fetchSignUpRequest);
}
