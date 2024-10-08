import { httpClient } from './index';

export const requestGet = (url, params) =>
  httpClient(url, { method: 'get', ...params });

export const requestPost = (url, params) =>
  httpClient(url, { method: 'post', ...params });

export const requestPut = (url, params) =>
  httpClient(url, { method: 'put', ...params });

export const requestPatch = (url, params) =>
  httpClient(url, { method: 'patch', ...params });

export const requestDelete = (url, params) =>
  httpClient(url, { method: 'delete', ...params });