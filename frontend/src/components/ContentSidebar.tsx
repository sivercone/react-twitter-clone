import React from 'react';
import { useSelector } from 'react-redux';
import { selectTagsItems } from '../store/ducks/tags/selectors';
import { Link } from 'react-router-dom';
import { Users } from './Users';

export const ContentSidebar: React.FC = () => {
   const items = useSelector(selectTagsItems);

   return (
      <div className="content_sidebar">
         <div className="search">
            <div>
               <svg className="svg" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
               </svg>
            </div>
            <input placeholder="Search Twitter" />
         </div>
         <div className="sticky">
            <div className="content_sidebar__column">
               <div className="content_sidebar__title">
                  <b>Trends for you</b>
               </div>
               <ul>
                  {items.map((obj) => (
                     <Link key={obj._id} to={`/home/search?q=${obj.name}`}>
                        <li>
                           <span>Development · Trending</span>
                           <h6>{obj.name}</h6>
                           <span>{obj.count}K Tweets</span>
                        </li>
                     </Link>
                  ))}
               </ul>
            </div>
            <div className="content_sidebar__column">
               <div className="content_sidebar__title">
                  <b>Who to follow</b>
               </div>
               <Users />
            </div>
         </div>
      </div>
   );
};
