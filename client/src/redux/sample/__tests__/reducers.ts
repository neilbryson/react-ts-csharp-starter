import { sample } from '../reducers';
import * as types from '../types';

describe('Sample reducers', () => {
  const initialState: types.SampleState = {
    currentTime: '',
    message: '',
  };

  test('default', () => {
    expect(sample(undefined, '' as unknown as types.SampleActions)).toStrictEqual(initialState);
  });

  describe('local actions', () => {
    test(types.LocalActions.CLEAR_DATA, () => {
      expect(
        sample(
          { ...initialState, message: 'hi', currentTime: '2021-08-24T12:11:13.4313326+08:00' },
          { type: types.LocalActions.CLEAR_DATA }
        )
      ).toStrictEqual(initialState);
    });
  });

  describe('thunk actions', () => {
    test(types.ThunkActions.GET_SAMPLE_SUCCESS, () => {
      const payload = { currentTime: '2021-08-24T12:11:13.4313326+08:00', message: 'Hello world!' };
      expect(sample(initialState, { type: types.ThunkActions.GET_SAMPLE_SUCCESS, payload })).toStrictEqual({
        ...initialState,
        ...payload,
      });
    });
  });
});
