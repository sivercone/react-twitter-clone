import React from 'react';
import { Link } from 'react-router-dom';

interface TweetsProps {
   _id: any;
   text: string;
   user: {
      fullname: string;
      username: string;
      avatarUrl: string;
   };
}

export const Tweets: React.FC<TweetsProps> = ({ text, user, _id }): React.ReactElement => {
   return (
      <div className="tweet">
         <Link to={`/home/tweet/${_id}`} className="tweet-wrapper">
            <div className="tweet__avatar">
               <img alt="" src={user.avatarUrl} />
            </div>
            <div className="tweet__column">
               <p className="tweet__author">
                  <span>
                     <b>{user.fullname}</b>
                     &nbsp;
                  </span>
                  <span>@{user.username}</span>
                  &nbsp;
                  <span>·</span>
                  &nbsp;
                  <span>2h</span>
               </p>
               <div className="tweet__post">
                  <p>{text}</p>
               </div>
               <div className="tweet__bottom">
                  <div className="tweet__bottom__btn">
                     <button>
                        <svg className="svg" focusable="false" viewBox="0 0 24 24" aria-hidden="true" fontSize="20px">
                           <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"></path>
                        </svg>
                     </button>

                     <span>132</span>
                  </div>
                  <div className="tweet__bottom__btn">
                     <button>
                        <svg className="svg" focusable="false" viewBox="0 0 24 24" aria-hidden="true" fontSize="20px">
                           <path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"></path>
                        </svg>
                     </button>

                     <span>32</span>
                  </div>
                  <div className="tweet__bottom__btn">
                     <button>
                        <svg className="svg" focusable="false" viewBox="0 0 24 24" aria-hidden="true" fontSize="20px">
                           <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path>
                        </svg>
                     </button>

                     <span>532</span>
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
         </Link>
      </div>
   );
};
