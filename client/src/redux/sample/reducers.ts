import * as types from './types';

const initialState: types.SampleState = {
  currentTime: '',
  message: '',
};

export function sample(state = initialState, action: types.SampleActions): types.SampleState {
  switch (action.type) {
    case types.LocalActions.CLEAR_DATA:
      return initialState;
    case types.ThunkActions.GET_SAMPLE_SUCCESS: {
      const { currentTime, message } = action.payload;
      return { ...state, currentTime, message };
    }
    default:
      return state;
  }
}
