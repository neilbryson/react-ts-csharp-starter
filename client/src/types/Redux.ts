import type { Action as ReduxAction } from 'redux';
import type { ThunkAction as TAction, ThunkDispatch as TDispatch } from 'redux-thunk';

import type { store } from '../redux/configureStore';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;

export type Action<T, P extends unknown = undefined> = P extends undefined
  ? ReduxAction<T>
  : ReduxAction<T> & { payload: P };

export type ThunkAction<A extends ReduxAction> = TAction<void, RootState, void, A>;

export type ThunkDispatch<A extends ReduxAction> = TDispatch<RootState, void, A>;
