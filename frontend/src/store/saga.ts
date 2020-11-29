import { all } from 'redux-saga/effects';
import { tweetsSaga } from './ducks/tweets/sagas';
import { tagsSaga } from './ducks/tags/sagas';
import { tweetDataSaga } from './ducks/tweetData/sagas';
import { UserSaga } from './ducks/user/sagas';

export default function* rootSaga() {
   // следить за всеми Sagas
   yield all([tweetsSaga(), tagsSaga(), tweetDataSaga(), UserSaga()]);
}
