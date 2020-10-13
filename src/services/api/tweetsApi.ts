import axios from 'axios';
import { TweetsState, Tweet } from '../../store/ducks/tweets/state';

export const TweetsApi = {
   fetchTweets(): Promise<TweetsState['items']> {
      return axios.get('/tweets').then(({ data }) => data);
   },

   fetchTweetData(id: string): Promise<Tweet[]> {
      return axios.get('/tweets?_id=' + id).then(({ data }) => data);
   },

   fetchCreateTweet(payload: Tweet): Promise<Tweet> {
      return axios.post('/tweets', payload).then(({ data }) => data);
   },
};
