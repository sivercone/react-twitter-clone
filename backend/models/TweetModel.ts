import { model, Schema, Document } from 'mongoose';
import { UserModelInterface } from './UserModel';

export interface TweetModelInterface {
   _id?: string;
   text: string;
   user: UserModelInterface;
   // likes: number;
   // retweets: number;
   // replies: string;
}

export type TweetModelDocumentInterface = TweetModelInterface & Document;

const TweetSchema = new Schema<TweetModelInterface>(
   {
      text: {
         required: true,
         type: String,
      },
      user: {
         required: true,
         ref: 'User',
         type: Schema.Types.ObjectId,
      },
   },
   { timestamps: true },
);

export const TweetModel = model<TweetModelDocumentInterface>('Tweet', TweetSchema);
