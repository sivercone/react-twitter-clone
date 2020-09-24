import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';

import { Tweet } from '../components/Tweet';

// to do
// make circular progress bar
// add hover to buttons

export const Home: React.FC = () => {
   return (
      <div className="wrapper_home">
         <header className="sidebar">
            <div className="sticky">
               <ul>
                  <li style={{ width: '100%' }}>
                     <svg className="svg" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
                     </svg>
                  </li>
                  <li>
                     <svg className="svg" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
                     </svg>
                     <h6>Home</h6>
                  </li>
                  <li>
                     <svg className="svg" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                     </svg>
                     <h6>Explore</h6>
                  </li>
                  <li>
                     <svg className="svg" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"></path>
                     </svg>
                     <h6>Notifications</h6>
                  </li>
                  <li>
                     <svg viewBox="0 0 24 24" className="svg">
                        <g>
                           <path d="M19.25 3.018H4.75C3.233 3.018 2 4.252 2 5.77v12.495c0 1.518 1.233 2.753 2.75 2.753h14.5c1.517 0 2.75-1.235 2.75-2.753V5.77c0-1.518-1.233-2.752-2.75-2.752zm-14.5 1.5h14.5c.69 0 1.25.56 1.25 1.25v.714l-8.05 5.367c-.273.18-.626.182-.9-.002L3.5 6.482v-.714c0-.69.56-1.25 1.25-1.25zm14.5 14.998H4.75c-.69 0-1.25-.56-1.25-1.25V8.24l7.24 4.83c.383.256.822.384 1.26.384.44 0 .877-.128 1.26-.383l7.24-4.83v10.022c0 .69-.56 1.25-1.25 1.25z"></path>
                        </g>
                     </svg>
                     <h6>Messages</h6>
                  </li>
                  <li>
                     <svg viewBox="0 0 24 24" className="svg">
                        <g>
                           <path d="M19.9 23.5c-.157 0-.312-.05-.442-.144L12 17.928l-7.458 5.43c-.228.164-.53.19-.782.06-.25-.127-.41-.385-.41-.667V5.6c0-1.24 1.01-2.25 2.25-2.25h12.798c1.24 0 2.25 1.01 2.25 2.25v17.15c0 .282-.158.54-.41.668-.106.055-.223.082-.34.082zM12 16.25c.155 0 .31.048.44.144l6.71 4.883V5.6c0-.412-.337-.75-.75-.75H5.6c-.413 0-.75.338-.75.75v15.677l6.71-4.883c.13-.096.285-.144.44-.144z"></path>
                        </g>
                     </svg>
                     <h6>Bookmarks</h6>
                  </li>
                  <li>
                     <svg viewBox="0 0 24 24" className="svg">
                        <g>
                           <path d="M19.75 22H4.25C3.01 22 2 20.99 2 19.75V4.25C2 3.01 3.01 2 4.25 2h15.5C20.99 2 22 3.01 22 4.25v15.5c0 1.24-1.01 2.25-2.25 2.25zM4.25 3.5c-.414 0-.75.337-.75.75v15.5c0 .413.336.75.75.75h15.5c.414 0 .75-.337.75-.75V4.25c0-.413-.336-.75-.75-.75H4.25z"></path>
                           <path d="M17 8.64H7c-.414 0-.75-.337-.75-.75s.336-.75.75-.75h10c.414 0 .75.335.75.75s-.336.75-.75.75zm0 4.11H7c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h10c.414 0 .75.336.75.75s-.336.75-.75.75zm-5 4.11H7c-.414 0-.75-.335-.75-.75s.336-.75.75-.75h5c.414 0 .75.337.75.75s-.336.75-.75.75z"></path>
                        </g>
                     </svg>
                     <h6>Lists</h6>
                  </li>
                  <li>
                     <svg viewBox="0 0 24 24" className="svg">
                        <g>
                           <path d="M12 11.816c1.355 0 2.872-.15 3.84-1.256.814-.93 1.078-2.368.806-4.392-.38-2.825-2.117-4.512-4.646-4.512S7.734 3.343 7.354 6.17c-.272 2.022-.008 3.46.806 4.39.968 1.107 2.485 1.256 3.84 1.256zM8.84 6.368c.162-1.2.787-3.212 3.16-3.212s2.998 2.013 3.16 3.212c.207 1.55.057 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.255-.223-2.71-.743c-.507-.578-.657-1.656-.45-3.205zm11.44 12.868c-.877-3.526-4.282-5.99-8.28-5.99s-7.403 2.464-8.28 5.99c-.172.692-.028 1.4.395 1.94.408.52 1.04.82 1.733.82h12.304c.693 0 1.325-.3 1.733-.82.424-.54.567-1.247.394-1.94zm-1.576 1.016c-.126.16-.316.246-.552.246H5.848c-.235 0-.426-.085-.552-.246-.137-.174-.18-.412-.12-.654.71-2.855 3.517-4.85 6.824-4.85s6.114 1.994 6.824 4.85c.06.242.017.48-.12.654z"></path>
                        </g>
                     </svg>
                     <h6>Profile</h6>
                  </li>
               </ul>
            </div>
         </header>
         <div className="content">
            <div className="content_tweets">
               <div className="content__title">
                  <h6>Home</h6>
               </div>
               <div className="post">
                  <div className="post__column">
                     <div className="tweet__avatar" style={{ padding: 0 }}>
                        <img
                           alt="Аватарка пользователя"
                           src="https://pbs.twimg.com/profile_images/1226042855552094208/z2_0Cfze_bigger.jpg"
                        />
                     </div>
                     <div className="post__textarea">
                        <TextareaAutosize placeholder="What's happening?" />
                     </div>
                  </div>
                  <div className="post__buttons">
                     <div className="post__buttons__more">
                        <button>
                           <svg className="svg" focusable="false" viewBox="0 0 24 24" aria-hidden="true" fontSize="26px">
                              <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"></path>
                           </svg>
                        </button>
                        <button>
                           <svg className="svg" focusable="false" viewBox="0 0 24 24" aria-hidden="true" fontSize="26px">
                              <circle cx="15.5" cy="9.5" r="1.5"></circle>
                              <circle cx="8.5" cy="9.5" r="1.5"></circle>
                              <path d="M12 16c-1.48 0-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5s4.32-1.45 5.12-3.5h-1.67c-.7 1.19-1.97 2-3.45 2zm-.01-14C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                           </svg>
                        </button>
                     </div>
                     <div className="post__buttons__send">
                        {/* <span>12</span> */}
                        <button>Tweet</button>
                     </div>
                  </div>
               </div>
               <div className="post__bottom"></div>
               <Tweet />
               <Tweet />
               <Tweet />
               <Tweet />
               <Tweet />
            </div>
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
                        <li>
                           <span>Politics · Trending</span>
                           <h6>ukrainian</h6>
                           <span>38.3K Tweets</span>
                        </li>
                        <li>
                           <span>Trending in Ukraine</span>
                           <h6>Нобелевскую</h6>
                           <span>6,620 Tweets</span>
                        </li>
                        <li>
                           <span>Trending in Ukraine</span>
                           <h6>Нобелевскую</h6>
                           <span>6,620 Tweets</span>
                        </li>
                     </ul>
                  </div>
                  <div className="content_sidebar__column">
                     <div className="content_sidebar__title">
                        <b>Who to follow</b>
                     </div>
                     <ul>
                        <li>
                           <div className="follow">
                              <div className="follow__image">
                                 <img
                                    src="https://pbs.twimg.com/profile_images/1272186775281123328/_PHu_9SU_bigger.jpg"
                                    alt="avatar"
                                 />
                              </div>
                              <div className="follow__name">
                                 <span>
                                    <b>이현섭</b>
                                 </span>
                                 <span>@ohMnr99erkFynJX</span>
                              </div>
                              <button>Follow</button>
                           </div>
                        </li>
                        <li>
                           <div className="follow">
                              <div className="follow__image">
                                 <img
                                    src="https://pbs.twimg.com/profile_images/1272186775281123328/_PHu_9SU_bigger.jpg"
                                    alt="avatar"
                                 />
                              </div>
                              <div className="follow__name">
                                 <span>
                                    <b>이현섭</b>
                                 </span>
                                 <span>@ohMnr99erkFynJX</span>
                              </div>
                              <button>Follow</button>
                           </div>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
