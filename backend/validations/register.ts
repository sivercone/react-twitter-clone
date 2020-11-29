import { body } from 'express-validator';

export const registerValidations = [
   body('email', 'enter e-mail')
      .isString()
      .isEmail()
      .withMessage('wrong e-mail')
      .isLength({
         min: 8,
         max: 50,
      })
      .withMessage('wrong e-mail'),

   body('username', 'enter username')
      .isString()
      .isLength({
         min: 5,
         max: 50,
      })
      .withMessage('wrong username'),

   body('password', 'enter password')
      .isString()
      .isLength({
         min: 6,
      })
      .withMessage('wrong password')
      .custom((value, { req }) => {
         if (value !== req.body.password2) {
            throw new Error('passwords do not match');
         } else {
            return value;
         }
      }),

   body('fullname', 'enter fullname')
      .isString()
      .isLength({
         min: 2,
         max: 50,
      })
      .withMessage('wrong fullname'),
];
