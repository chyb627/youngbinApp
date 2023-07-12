import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { loadToken, setToken } from '../util/token';

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;
axios.interceptors.response.use(
  (response) => {
    // 로그인 토큰 설정
    if (response && response.data && response.data.access_token) {
      setToken(response.data.access_token);
    } else {
      console.log('LOAD TOKEN!!');
      loadToken();
    }
    // console.log('response.data:::', response.data);
    return response;
  },
  (error) => {
    console.debug('interceptors.response.use error', error);
    return Promise.reject(error);
  },
);

// 회원가입
type SignupData = { password: string | undefined; email: string | undefined; passwordCheck: string | undefined };
export const signup = createAsyncThunk('auth/signup', async (data: SignupData) => {
  const response = await axios.post('/auth/signup', data);

  return response.data;
});

// 로그인
type SigninData = { password: string | undefined; email: string | undefined };
export const signin = createAsyncThunk('auth/signin', async (data: SigninData) => {
  const response = await axios.post('/auth/signin', data);
  return response.data;
});
