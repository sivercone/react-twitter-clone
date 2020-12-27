export enum LoadingState {
   LOADING = 'LOADING',
   LOADED = 'LOADED',
   ERROR = 'ERROR',
   NEVER = 'NEVER',
   SUCCESS = 'SUCCESS',
}

export interface UserInterface {
   _id?: string;
   email: string;
   username: string;
   password: string;
   fullname: string;
   confirmed?: boolean;
   confirm_hash: string;
   location?: string;
   about?: string;
   website?: string;
}

export interface UserState {
   data: UserInterface | undefined;
   status: LoadingState;
}
