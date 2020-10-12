// для удобства, вытаскивать данные которые необходимы

import { RootState } from '../../store';
import { TagsState } from './state';
import { createSelector } from 'reselect';

export const selectTags = (state: RootState): TagsState => state.tags;
// export const selectIsTagsLoaded = (state: RootState) => selectTags(state).loadingState;

export const selectTagsItems = createSelector(selectTags, (tags) => tags.items);
