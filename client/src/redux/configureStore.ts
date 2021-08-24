import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';

import { rootReducer } from './rootReducer';

const reducers = combineReducers({ ...rootReducer });
const middlewares = applyMiddleware(thunk);
const enhancers = composeWithDevTools(middlewares);
export const store = createStore(reducers, enhancers);
