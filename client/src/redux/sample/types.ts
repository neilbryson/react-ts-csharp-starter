import { Action } from '../../types/Redux';

export const enum LocalActions {
  CLEAR_DATA = 'sample/CLEAR_DATA',
}

export const enum ThunkActions {
  GET_SAMPLE_START = 'sample/GET_SAMPLE_START',
  GET_SAMPLE_SUCCESS = 'sample/GET_SAMPLE_SUCCESS',
  GET_SAMPLE_ERROR = 'sample/GET_SAMPLE_ERROR',
}

export interface SampleItem {
  currentTime: string;
  message: string;
}

export interface SampleState {
  currentTime: string;
  message: string;
}

export type ClearData = Action<LocalActions.CLEAR_DATA>;

export type GetSampleStart = Action<ThunkActions.GET_SAMPLE_START>;
export type GetSampleSuccess = Action<ThunkActions.GET_SAMPLE_SUCCESS, SampleItem>;
export type GetSampleError = Action<ThunkActions.GET_SAMPLE_ERROR>;

export type SampleActions = ClearData | GetSampleStart | GetSampleSuccess | GetSampleError;
