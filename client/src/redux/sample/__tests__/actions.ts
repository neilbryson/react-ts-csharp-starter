import axios from 'axios';

import { createMockStore } from '../../../utilities/test';
import { clearData, getSample } from '../actions';
import * as types from '../types';

describe('Sample action creators', () => {
  describe('local actions', () => {
    test('clearData', () => {
      expect(clearData()).toStrictEqual({ type: types.LocalActions.CLEAR_DATA });
    });
  });

  describe('thunk actions', () => {
    const mockStore = createMockStore();
    const store = mockStore({});

    afterEach(() => {
      store.clearActions();
    });

    describe('getSample', () => {
      test('success', async () => {
        const data = { currentDate: '1901-01-21T11:47:09.5753842+08:00', message: 'Hello!' };
        (axios.request as jest.Mock).mockResolvedValueOnce({ data });
        await store.dispatch(getSample());
        expect(store.getActions()).toStrictEqual([
          { type: types.ThunkActions.GET_SAMPLE_START },
          { type: types.ThunkActions.GET_SAMPLE_SUCCESS, payload: data },
        ]);
      });

      test('error', async () => {
        (axios.request as jest.Mock).mockRejectedValueOnce({});
        await store.dispatch(getSample());
        expect(store.getActions()).toStrictEqual([
          { type: types.ThunkActions.GET_SAMPLE_START },
          { type: types.ThunkActions.GET_SAMPLE_ERROR },
        ]);
      });
    });
  });
});
