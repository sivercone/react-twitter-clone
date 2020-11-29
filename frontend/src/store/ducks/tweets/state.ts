export enum LoadingState {
   LOADING = 'LOADING',
   LOADED = 'LOADED',
   ERROR = 'ERROR',
   NEVER = 'NEVER',
}

export enum CreateTweetState {
   LOADING = 'LOADING',
   ERROR = 'ERROR',
   STATIC = 'STATIC',
}

export interface Tweet {
   _id: string;
   text: string;
   createdAt: string;
   user: {
      fullname: string;
      username: string;
      avatarUrl: string;
   };
}

export interface TweetsState {
   items: Tweet[];
   loadingState: LoadingState;
   createTweetState: CreateTweetState;
}
