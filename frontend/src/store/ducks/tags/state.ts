export enum LoadingState {
   LOADING = 'LOADING',
   LOADED = 'LOADED',
   ERROR = 'ERROR',
   NEVER = 'NEVER',
}

export interface Tag {
   _id: string;
   name: string;
   count: number;
}

export interface TagsState {
   items: Tag[];
   loadingState: LoadingState;
}
