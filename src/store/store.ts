import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './rootReducer';
import rootSaga from './saga';

import { TweetsState } from './ducks/tweets/contracts/state';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const sagaMiddleware = createSagaMiddleware();

export interface RootState {
   loadingState: any;
   items: any;
   tweets: TweetsState;
}

// sagaMiddleware каждый раз вызывается когда происходя изменения в rootReducer(а изменения в редюсере будут когда действуют actions)
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

// Запуск саги
sagaMiddleware.run(rootSaga);
