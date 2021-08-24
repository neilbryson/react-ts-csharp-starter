import { ThunkAction } from '../../types/Redux';
import { api } from '../../utilities/api';
import * as types from './types';

export const clearData = (): types.ClearData => ({
  type: types.LocalActions.CLEAR_DATA,
});

export function getSample(): ThunkAction<types.GetSampleStart | types.GetSampleSuccess | types.GetSampleError> {
  return async (dispatch) => {
    dispatch({ type: types.ThunkActions.GET_SAMPLE_START });

    try {
      const { data } = await api<types.SampleItem>({
        url: `/api/v1/sample`,
        method: 'get',
      });

      dispatch({ payload: data, type: types.ThunkActions.GET_SAMPLE_SUCCESS });
    } catch (e: unknown) {
      dispatch({ type: types.ThunkActions.GET_SAMPLE_ERROR });
    }
  };
}
