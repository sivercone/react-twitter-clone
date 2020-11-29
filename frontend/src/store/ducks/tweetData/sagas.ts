import { call, put, takeEvery } from 'redux-saga/effects';
import { Tweet, LoadingState } from '../tweets/state';
import { setTweetData, setTweetDataLoadingState } from './actionCreators';
import { IFetchTweetDataAction, TweetDataActionsType } from './actionTypes';
import { TweetsApi } from '../../../services/api/tweetsApi';

export function* fetchTweetDataRequest({ payload: tweetId }: IFetchTweetDataAction) {
   try {
      const data: Tweet = yield call(TweetsApi.fetchTweetData, tweetId);
      yield put(setTweetData(data));
   } catch (error) {
      yield put(setTweetDataLoadingState(LoadingState.ERROR));
   }
}

export function* tweetDataSaga() {
   yield takeEvery(TweetDataActionsType.FETCH_TWEET_DATA, fetchTweetDataRequest);
}
