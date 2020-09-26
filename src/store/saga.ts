import { all } from 'redux-saga/effects';
import { tweetsSaga } from './ducks/tweets/sagas';

export default function* rootSaga() {
   // следить за всеми tweetsSaga
   yield all([tweetsSaga()]);
}
