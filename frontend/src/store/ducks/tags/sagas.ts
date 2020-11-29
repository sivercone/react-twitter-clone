import { takeLatest, call, put } from 'redux-saga/effects';
import { LoadingState } from './state';
import { TagsApi } from '../../../services/api/tagsApi';
import { TagsActionsType } from './actionTypes';
import { setTagsLoadingState, setTags } from './actionCreators';

export function* fetchTagsRequest() {
   try {
      const items = yield call(TagsApi.fetchTags);
      yield put(setTags(items));
   } catch (error) {
      yield put(setTagsLoadingState(LoadingState.ERROR));
   }
}

export function* tagsSaga() {
   // следить за каждым последним actions и когда он действует вызывать fetchTagsRequest
   yield takeLatest(TagsActionsType.FETCH_TAGS, fetchTagsRequest);
}

// yield put == dispatch()
