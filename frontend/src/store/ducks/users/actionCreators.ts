import { UserInterface } from '../user/state';
import { ISetUsersItemsAction, UsersActionsType, IFetchUsersItemsAction } from './actionTypes';

export const setUsersItems = (payload: UserInterface[]): ISetUsersItemsAction => ({
   type: UsersActionsType.SET_ITEMS,
   payload,
});

export const fetchUsersItems = (): IFetchUsersItemsAction => ({
   type: UsersActionsType.FETCH_ITEMS,
});

export type UsersActions = ISetUsersItemsAction | IFetchUsersItemsAction;
