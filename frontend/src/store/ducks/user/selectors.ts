import { RootState } from '../../store';
import { UserState, LoadingState } from './state';

export const selectUserState = (state: RootState): UserState => state.user;

export const selectUserData = (state: RootState): UserState['data'] => selectUserState(state).data;

export const selectIsAuthorized = (state: RootState): boolean => selectUserState(state).data !== undefined;

export const selectUserStatus = (state: RootState): UserState['status'] => selectUserState(state).status;

export const selectUserIsLoading = (state: RootState): boolean => selectUserState(state).status === LoadingState.LOADING;
