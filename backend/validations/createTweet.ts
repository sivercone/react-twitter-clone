import { body } from 'express-validator';

export const createTweetValidations = [
   body('text', 'enter text of tweet')
      .isString()
      .isLength({
         max: 280,
      })
      .withMessage('max length of text does not should be more then 280'),
];
