import { takeLatest, call, put } from 'redux-saga/effects';
import { LoadingState } from './state';
import { TagsApi } from '../../../services/api/tagsApi';
import { setUsersItems } from './actionCreators';
import { UsersActionsType } from './actionTypes';

// export function* fetchUsersRequest() {
//    try {
//       const items = yield call(TagsApi.fetchTags);
//       yield put(setUsersItems(items));
//    } catch (error) {
//       yield put(setUsersLoadingState(LoadingState.ERROR));
//    }
// }

export function* UsersSaga() {
   // следить за каждым последним actions и когда он действует вызывать fetchTagsRequest
   //    yield takeLatest(UsersActionsType.FETCH_ITEMS, fetchUsersRequest);
}

// yield put == dispatch()
