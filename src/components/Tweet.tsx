import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTweetData, setTweetData } from '../store/ducks/tweetData/actionCreators';
import { selectTweetDataItems } from '../store/ducks/tweetData/selectors';
import { Tweets } from './Tweets';

export const Tweet: React.FC = (): React.ReactElement | null => {
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
      <div>
         <Tweets {...tweetData} />
      </div>
   );
};
