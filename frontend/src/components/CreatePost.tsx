import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { useDispatch } from 'react-redux';
import { fetchCreateTweet } from '../store/ducks/tweets/actionCreators';

export const CreatePost: React.FC = () => {
   const dispatch = useDispatch();
   const [text, setText] = React.useState<string>('');

   const TEXT_LIMIT: number = 281;
   const normalizedRadius: number = 9 * 2 * Math.PI;
   const strokeDashoffset: number = normalizedRadius - (text.length / TEXT_LIMIT) * normalizedRadius;
   const textCount: number = TEXT_LIMIT - text.length - 1;

   const handleChangeTextarea = (e: React.FormEvent<HTMLTextAreaElement>): void => {
      if (e.currentTarget) {
         setText(e.currentTarget.value);
      }
   };

   const addTweet = (): void => {
      if (!text.trim()) {
         return;
      }
      dispatch(fetchCreateTweet(text));
      setText('');
   };

   return (
      <div className="post">
         <div className="post__column">
            <div className="tweet__avatar" style={{ padding: 0 }}>
               <img alt="" src="https://pbs.twimg.com/profile_images/1226042855552094208/z2_0Cfze_bigger.jpg" />
            </div>
            <div className="post__textarea">
               <TextareaAutosize onChange={handleChangeTextarea} value={text} placeholder="What's happening?" />
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
               {text && (
                  <>
                     <span>{textCount <= 30 ? textCount : ''}</span>
                     <div className="progressbar">
                        <svg height="100%" viewBox="0 0 20 20" width="100%" style={{ overflow: 'visible' }}>
                           <circle cx="50%" cy="50%" fill="none" strokeWidth="2" r="9" stroke="#38444D"></circle>
                           <circle
                              cx="50%"
                              cy="50%"
                              fill="none"
                              strokeWidth="2"
                              r="9"
                              stroke={text.length >= TEXT_LIMIT ? '#E0245E' : '#1DA1F2'}
                              strokeLinecap="round"
                              strokeDashoffset={strokeDashoffset}
                              strokeDasharray={normalizedRadius}></circle>
                        </svg>
                     </div>
                  </>
               )}

               <button className="btn_blue" onClick={addTweet} disabled={text.length >= TEXT_LIMIT || !text || !text.trim()}>
                  Tweet
               </button>
            </div>
         </div>
      </div>
   );
};
