import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTweetData, setTweetData } from '../store/ducks/tweetData/actionCreators';
import { selectTweetDataItems } from '../store/ducks/tweetData/selectors';
import { format } from 'date-fns';

export const TweetData: React.FC = (): React.ReactElement | null => {
   const dispatch = useDispatch();
   const tweetData = useSelector(selectTweetDataItems);

   const params: { id: string } = useParams();
   const id = params.id;

   React.useEffect(() => {
      if (id) {
         dispatch(fetchTweetData(id));
      }
      return () => {
         dispatch(setTweetData(undefined));
      };
   }, [dispatch, id]);

   if (!tweetData) {
      return null;
   }

   return (
      <div className="tweetPage">
         <div className="tweetPage__container">
            <div className="tweetPage__author">
               <img alt="" src={tweetData.user.avatarUrl} />
               <div className="tweetPage__name">
                  <span className="tweet__top">
                     <b>{tweetData.user.fullname}</b>
                     <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        className="svg"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                           fillRule="evenodd"
                           d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
                        />
                     </svg>
                  </span>
                  <span>@{tweetData.user.username}</span>
               </div>
            </div>
            <div className="tweet__post">
               <p>{tweetData.text}</p>
            </div>
            <div className="tweetPage__date">{format(new Date(tweetData.createdAt), 'h:mm a · MMM d, yyyy')}</div>
            <hr />
            <div className="tweetPage__stats">
               <span>
                  <b>123</b> Retweets
               </span>
               <span>
                  <b>502</b> Likes
               </span>
            </div>
            <hr />
            <div className="tweet__bottom">
               <div className="tweet__bottom__btn">
                  <button>
                     <svg className="svg" focusable="false" viewBox="0 0 24 24" aria-hidden="true" fontSize="20px">
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"></path>
                     </svg>
                  </button>
               </div>
               <div className="tweet__bottom__btn">
                  <button>
                     <svg className="svg" focusable="false" viewBox="0 0 24 24" aria-hidden="true" fontSize="20px">
                        <path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"></path>
                     </svg>
                  </button>
               </div>
               <div className="tweet__bottom__btn">
                  <button>
                     <svg className="svg" focusable="false" viewBox="0 0 24 24" aria-hidden="true" fontSize="20px">
                        <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path>
                     </svg>
                  </button>
               </div>
               <div className="tweet__bottom__btn">
                  <button>
                     <svg className="svg" focusable="false" viewBox="0 0 24 24" aria-hidden="true" fontSize="20px">
                        <path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"></path>
                     </svg>
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};
