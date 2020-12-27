import { RootState } from '../../store';
import { UsersState } from './state';

export const selectUsers = (state: RootState): UsersState => state.users;

export const selectUsersItems = (state: RootState): UsersState['items'] => state.users.items;
