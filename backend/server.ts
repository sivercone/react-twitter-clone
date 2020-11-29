import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { registerValidations } from './validations/register';
import { UserCtrl } from './controllers/UserController';
import './core/db';
import { passport } from './core/passport';
import { TweetCtrl } from './controllers/TweetController';
import { createTweetValidations } from './validations/createTweet';

const app = express();

app.use(express.json());
app.use(passport.initialize());

app.get('/users', UserCtrl.index);
app.get('/users/me', passport.authenticate('jwt'), UserCtrl.getUserInfo);
app.get('/users/:id', UserCtrl.show);

app.get('/tweets', TweetCtrl.index);
app.get('/tweets/:id', TweetCtrl.show);
app.post('/tweets', passport.authenticate('jwt'), createTweetValidations, TweetCtrl.create);
app.delete('/tweets/:id', passport.authenticate('jwt'), TweetCtrl.delete);
app.patch('/tweets/:id', passport.authenticate('jwt'), createTweetValidations, TweetCtrl.update);

app.get('/auth/verify', registerValidations, UserCtrl.verify);
app.post('/auth/register', registerValidations, UserCtrl.create);
app.post('/auth/login', passport.authenticate('local'), UserCtrl.afterLogin);
// app.put('/users', UserCtrl.update);
// app.delete('/users', UserCtrl.delete);

app.listen(process.env.PORT, () => {
   console.log('SERVER RUNNING...');
});
