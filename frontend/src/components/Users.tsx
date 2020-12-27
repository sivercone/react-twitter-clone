import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUsersItems } from '../store/ducks/users/selectors';
import { UserInterface } from '../store/ducks/user/state';

export const Users = () => {
   const items = useSelector(selectUsersItems);

   return (
      <ul>
         {items.map((obj: UserInterface) => (
            <li>
               <Link to="/home">
                  <div className="follow">
                     <div className="follow__image">
                        <img src="https://pbs.twimg.com/profile_images/1272186775281123328/_PHu_9SU_bigger.jpg" alt="avatar" />
                     </div>
                     <div className="follow__name">
                        <span>
                           <b>{obj.fullname}</b>
                        </span>
                        <span>@{obj.username}</span>
                     </div>
                     <button className="btn_dark">Follow</button>
                  </div>
               </Link>
            </li>
         ))}
      </ul>
   );
};
