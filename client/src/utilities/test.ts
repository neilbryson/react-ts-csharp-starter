import { AnyAction } from 'redux';
import configureStore, { MockStoreCreator } from 'redux-mock-store';
import thunk from 'redux-thunk';

import { RecursivePartial } from '../types/Misc';
import { RootState, ThunkDispatch } from '../types/Redux';

export function createMockStore(): MockStoreCreator<
  Partial<RootState> | RecursivePartial<RootState>,
  ThunkDispatch<AnyAction>
> {
  return configureStore([thunk]);
}
