import { model, Schema, Document } from 'mongoose';

export interface UserModelInterface {
   _id?: string;
   email: string;
   username: string;
   password: string;
   fullname: string;
   confirmed?: boolean;
   confirm_hash: string;
   location?: string;
   about?: string;
   website?: string;
}

export type UserModelDocumentInterface = UserModelInterface & Document;

const UserSchema = new Schema<UserModelInterface>(
   {
      email: {
         unique: true,
         required: true,
         type: String,
      },
      username: {
         unique: true,
         required: true,
         type: String,
      },
      password: {
         required: true,
         type: String,
      },
      fullname: {
         required: true,
         type: String,
      },
      confirmed: {
         type: Boolean,
         default: false,
      },
      confirm_hash: {
         required: true,
         type: String,
      },
      location: String,
      about: String,
      website: String,
   },
   {
      timestamps: true,
   },
);

UserSchema.set('toJSON', {
   transform: function (_, obj) {
      delete obj.password;
      delete obj.confirm_hash;
      return obj;
   },
});

export const UserModel = model<UserModelDocumentInterface>('User', UserSchema);
