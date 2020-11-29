import { compose } from 'redux';

// для работы composeEnhancers
declare global {
   interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
   }
}
