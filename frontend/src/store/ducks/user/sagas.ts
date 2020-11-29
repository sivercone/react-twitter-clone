import { takeLatest, call, put } from 'redux-saga/effects';
import { LoadingState } from './state';
import { FetchSignInActionInterface, UserActionsType } from './actionTypes';
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

export function* UserSaga() {
   yield takeLatest(UserActionsType.FETCH_SIGN_IN, fetchSignInRequest);
}
