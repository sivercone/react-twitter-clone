// для удобства, вытаскивать данные которые необходимы

import { RootState } from '../../store';
import { TagsState } from './state';

export const selectTagsState = (state: RootState): TagsState => state.tags;
// export const selectIsTagsLoaded = (state: RootState) => selectTags(state).loadingState;

// export const selectTagsItems = createSelector(selectTags, (tags) => tags.items);
export const selectTagsItems = (state: RootState) => selectTagsState(state).items;
