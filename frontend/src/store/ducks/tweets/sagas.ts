import { takeLatest, call, put } from 'redux-saga/effects';
import { TweetsApi } from '../../../services/api/tweetsApi';
import { LoadingState, CreateTweetState } from './state';
import { setTweets, setTweetsLoadingState, CreateTweet, setCreateTweetState } from './actionCreators';
import { TweetsActionsType, IFetchCreateTweetAction } from './actionTypes';

export function* fetchTweetsRequest() {
   try {
      const items = yield call(TweetsApi.fetchTweets);
      yield put(setTweets(items));
   } catch (error) {
      yield put(setTweetsLoadingState(LoadingState.ERROR));
   }
}
///16 04
export function* fetchCreateTweetRequest({ payload: text }: IFetchCreateTweetAction) {
   try {
      const item = yield call(TweetsApi.fetchCreateTweet, text);
      yield put(CreateTweet(item));
   } catch (error) {
      yield put(setCreateTweetState(CreateTweetState.ERROR));
   }
}

export function* tweetsSaga() {
   // следить за каждым последним actions и когда он действует вызывать fetchTweetsRequest
   yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
   yield takeLatest(TweetsActionsType.FETCH_CREATE_TWEET, fetchCreateTweetRequest);
}

// yield put == dispatch()
