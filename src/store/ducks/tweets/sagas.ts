import { takeLatest, call, put } from 'redux-saga/effects';
import { TweetsApi } from '../../../services/api/tweetsApi';
import { LoadingState } from './state';
import { setTweets, setTweetsLoadingState } from './actionCreators';
import { TweetsActionsType } from './actionTypes';

export function* fetchTweetsRequest() {
   try {
      const items = yield call(TweetsApi.fetchTweets);
      yield put(setTweets(items));
   } catch (error) {
      yield put(setTweetsLoadingState(LoadingState.ERROR));
   }
}

export function* tweetsSaga() {
   // следить за каждым последним actions и когда он действует вызывать fetchTweetsRequest
   yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
}

// yield put == dispatch()
