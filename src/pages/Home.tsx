import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Tweet } from '../components/Tweet';
import { Post } from '../components/Post';
import { ContentSidebar } from '../components/ContentSidebar';
import { Sidebar } from '../components/Sidebar';
import { fetchTweets } from '../store/ducks/tweets/actionCreators';
import { selectTweetsItems } from '../store/ducks/tweets/selectors';

// to do
// add hover to buttons

export const Home: React.FC = () => {
   const dispatch = useDispatch();
   const tweets = useSelector(selectTweetsItems);

   React.useEffect(() => {
      dispatch(fetchTweets());
   }, [dispatch]);

   return (
      <div className="wrapper_home">
         <Sidebar />
         <div className="content">
            <div className="content_tweets">
               <div className="content__title">
                  <h6>Home</h6>
               </div>
               <Post />
               <div className="post__bottom"></div>
               {tweets.map((tweet) => (
                  <Tweet key={tweet._id} text={tweet.text} user={tweet.user} />
               ))}
            </div>
            <ContentSidebar />
         </div>
      </div>
   );
};
