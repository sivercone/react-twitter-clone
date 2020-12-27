import { Action } from 'redux';
import { UserInterface } from '../user/state';

export enum UsersActionsType {
   SET_ITEMS = 'users/SET_ITEMS',
   FETCH_ITEMS = 'users/FETCH_ITEMS',
}

export interface ISetUsersItemsAction extends Action<UsersActionsType> {
   type: UsersActionsType.SET_ITEMS;
   payload: UserInterface[];
}

export interface IFetchUsersItemsAction extends Action<UsersActionsType> {
   type: UsersActionsType.FETCH_ITEMS;
}
