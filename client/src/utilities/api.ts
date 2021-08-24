import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const { VITE_SERVER_HOST, VITE_SERVER_PORT, VITE_SERVER_PROTOCOL } = import.meta.env;

const BASE_URL = `${VITE_SERVER_PROTOCOL}://${VITE_SERVER_HOST}:${VITE_SERVER_PORT}`;
const TIMEOUT = 25000;

const defaultOpts: AxiosRequestConfig = {
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  timeout: TIMEOUT,
};

export function api<T extends unknown = Record<string, unknown>>(
  options: AxiosRequestConfig = {}
): Promise<AxiosResponse<T>> {
  const opts = {
    ...defaultOpts,
    ...options,
    headers: {
      ...defaultOpts.headers,
      ...options.headers,
    },
  };
  return axios.request(opts);
}
