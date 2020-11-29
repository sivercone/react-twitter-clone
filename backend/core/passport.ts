import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as JWTstrategy, ExtractJwt } from 'passport-jwt';
import { UserModel, UserModelInterface } from '../models/UserModel';
import { generateMD5 } from '../utils/generateHash';

passport.use(
   new LocalStrategy(
      // получаем лог и пар
      async (username, password, done): Promise<void> => {
         try {
            // находим пользователя
            const user = await UserModel.findOne({ $or: [{ email: username }, { username }] }).exec();

            // есть ли пользователь
            if (!user) {
               return done(null, false);
            }

            // если есть пользователь проверяем пароль
            if (user.password === generateMD5(password + process.env.SECRET_KEY)) {
               done(null, user);
            } else {
               done(null, false);
            }
         } catch (error) {
            done(error, false);
         }
      },
   ),
);

passport.use(
   new JWTstrategy(
      {
         secretOrKey: process.env.SECRET_KEY || '123',
         jwtFromRequest: ExtractJwt.fromHeader('token'),
      },
      async (payload: { data: UserModelInterface }, done) => {
         try {
            const user = await UserModel.findById(payload.data._id).exec();

            if (user) {
               return done(null, user);
            }

            done(null, false);
         } catch (error) {
            done(error, false);
         }
      },
   ),
);

passport.serializeUser((user: UserModelInterface, done) => {
   done(null, user?._id);
});

passport.deserializeUser((id, done) => {
   UserModel.findById(id, (err, user) => {
      done(err, user);
   });
});

export { passport };
