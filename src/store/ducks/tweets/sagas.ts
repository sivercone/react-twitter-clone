import { takeLatest, call, put } from 'redux-saga/effects';
import { TweetsApi } from '../../../services/api/tweetsApi';
import { LoadingState, Tweet } from './state';
import { setTweets, setTweetsLoadingState, CreateTweet } from './actionCreators';
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
export function* fetchCreateTweetRequest({ payload }: IFetchCreateTweetAction) {
   try {
      const data: Tweet = {
         _id: Math.random().toString(36).substr(2),
         text: payload,
         user: {
            fullname: 'Rakso Nael',
            username: 'sivercone',
            avatarUrl: 'https://pbs.twimg.com/profile_images/1226042855552094208/z2_0Cfze_bigger.jpg',
         },
      };
      const item = yield call(TweetsApi.fetchCreateTweet, data);
      yield put(CreateTweet(item));
   } catch (error) {
      yield put(setTweetsLoadingState(LoadingState.ERROR));
   }
}

export function* tweetsSaga() {
   // следить за каждым последним actions и когда он действует вызывать fetchTweetsRequest
   yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
   yield takeLatest(TweetsActionsType.FETCH_CREATE_TWEET, fetchCreateTweetRequest);
}

// yield put == dispatch()
