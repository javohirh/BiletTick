import axios from 'axios';
import { Cookies } from 'react-cookie';
import ToastError from "../components/notification/ErrorNotification";
import CryptoJS from 'crypto-js';

const cookies = new Cookies();
const createHMAC = (message) => {
  return CryptoJS
      .HmacSHA256(message, process.env.REACT_APP_SECRET)
      .toString(CryptoJS.enc.Hex);
};
const hmac = createHMAC(process.env.REACT_APP_MESSAGE);

export const BASE_URL =  process.env.REACT_APP_BASE_URL;
export const DEFAULT_HEADERS = {
  // Accept: 'application/json, text/plain, */*',
  'Content-Type': 'application/json',
  "x-api-key": "abc123",
  "x-language": "ru",
  "x-platform": "web",
  "x-device-model": "PC",
  "x-device-id": "be20e3fffa6c417e",
  "x-version": "1.0.6",
  "x-auth": hmac,
  "Authorization": `Bearer ${cookies.get('accessToken')}`
};

export const httpClient = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
  headers: DEFAULT_HEADERS,
});

httpClient.interceptors.response.use(
  (response) => {
    console.log('HTTP RESPONSE:--> ', response);
    // response?.data?.status === 'error'
    return response;
  },
  (error) => {
    console.log('HTTP Error --->', error);
    const status = (error.response && error.response.status) || 0;

    ToastError(
      error?.response?.data?.message ||
          'Something went wrong', '', {
        toastId: error?.response?.data?.instance||error?.config?.url||'error',
      },
    );
    if (status === 401) {
      //navigate to login screen
      cookies.remove('accessToken', { path: '/' });
      // store.dispatch(clearSessions());
      // store.dispatch(clearSettingsColumnsSort());
      location.reload();
      return Promise.reject('login or password invalid');
    }
    return Promise.reject(error);
  },
);




