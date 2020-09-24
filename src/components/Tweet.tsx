import React from 'react';

export const Tweet = () => {
   return (
      <div className="tweet">
         <div className="tweet__avatar">
            <img alt="Аватарка пользователя" src="https://pbs.twimg.com/profile_images/1226042855552094208/z2_0Cfze_bigger.jpg" />
         </div>
         <div className="tweet__column">
            <p className="tweet__author">
               <span>
                  <b>Rakso Nael</b>
                  &nbsp;
               </span>
               <span>@sivercone</span>
               &nbsp;
               <span>·</span>
               &nbsp;
               <span>2h</span>
            </p>
            <div className="tweet__post">
               <p>
                  30일 이라는 웹툰을 그리고 준비하고 있는데요. 거기 나오는 추가 캐릭터를 만드는데, 예전에 작업했던 캐릭터를 다시
                  사용해보려고 작업했어요~ 아래 캐릭터입니다. 13년에 그렸네요 ㅎ 벌써 7년이.... 웹툰은 좀더 간단히 그리고 있어요~
                  ㅋ 다들 즐거운 주말요~
               </p>
            </div>
            <div className="tweet__bottom">
               <div className="tweet__bottom__btn">
                  <button>
                     <svg className="svg" focusable="false" viewBox="0 0 24 24" aria-hidden="true" font-size="20px">
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"></path>
                     </svg>
                  </button>

                  <span>132</span>
               </div>
               <div className="tweet__bottom__btn">
                  <button>
                     <svg className="svg" focusable="false" viewBox="0 0 24 24" aria-hidden="true" font-size="20px">
                        <path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"></path>
                     </svg>
                  </button>

                  <span>32</span>
               </div>
               <div className="tweet__bottom__btn">
                  <button>
                     <svg className="svg" focusable="false" viewBox="0 0 24 24" aria-hidden="true" font-size="20px">
                        <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path>
                     </svg>
                  </button>

                  <span>532</span>
               </div>
               <div className="tweet__bottom__btn">
                  <button>
                     <svg className="svg" focusable="false" viewBox="0 0 24 24" aria-hidden="true" font-size="20px">
                        <path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"></path>
                     </svg>
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};
