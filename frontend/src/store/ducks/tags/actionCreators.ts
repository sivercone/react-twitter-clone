import { TagsActionsType, ISetTagsAction, ISetTagsLoadingStateAction, IFetchTagsAction } from './actionTypes';
import { TagsState, LoadingState } from './state';

// => ({ функция которая возвращает объект })
// функция которая получает TagsState['items'] и возвращает объект ISetTagsAction => ({})
export const setTags = (payload: TagsState['items']): ISetTagsAction => ({
   type: TagsActionsType.SET_TAGS,
   payload,
});

export const setTagsLoadingState = (payload: LoadingState): ISetTagsLoadingStateAction => ({
   type: TagsActionsType.SET_LOADING_STATE,
   payload,
});

export const fetchTags = (): IFetchTagsAction => ({
   type: TagsActionsType.FETCH_TAGS,
});

export type TagsActions = ISetTagsAction | IFetchTagsAction | ISetTagsLoadingStateAction;
