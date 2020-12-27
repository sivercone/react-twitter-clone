import React from 'react';
import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchTweets } from '../store/ducks/tweets/actionCreators';
import { selectTweetsItems } from '../store/ducks/tweets/selectors';
import { fetchTags } from '../store/ducks/tags/actionCreators';

import { Sidebar } from '../components/Sidebar';
import { BackHistory } from '../components/BackHistory';
import { CreatePost } from '../components/CreatePost';
import { TweetData } from '../components/TweetData';
import { Tweets } from '../components/Tweets';
import { ContentSidebar } from '../components/ContentSidebar';

export const Home: React.FC = () => {
   const dispatch = useDispatch();
   const tweets = useSelector(selectTweetsItems);

   React.useEffect(() => {
      dispatch(fetchTweets());
      dispatch(fetchTags());
   }, [dispatch]);

   return (
      <div className="wrapper_home">
         <Sidebar />
         <div className="content">
            <div className="content_tweets">
               <div className="content__title">
                  <Route path={['/home', '/home/search']} exact>
                     <h6>Home</h6>
                  </Route>
                  <Route path="/home/tweet">
                     <BackHistory />
                     <h6>Tweet</h6>
                  </Route>
               </div>
               <Route path={['/home', '/home/search']} exact>
                  <CreatePost />
               </Route>

               <Route path="/home/tweet/:id" component={TweetData} exact />
               <div className="post__bottom"></div>
               <Route path="/home" exact>
                  {tweets && tweets.map((tweet) => <Tweets key={tweet._id} {...tweet} />)}
               </Route>
            </div>
            <ContentSidebar />
         </div>
      </div>
   );
};
