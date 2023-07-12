import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const setToken = (token: string | null) => {
  (async () => {
    try {
      if (token) {
        // console.log('setToken =', window?.localStorage);

        axios.defaults.headers.Authorization = 'Bearer ' + token;
        // window?.localStorage && window.localStorage.setItem('token', token);
        await AsyncStorage.setItem('token', token);
      } else {
        // console.log('setToken delete');
        // delete axios.defaults.headers.Authorization;
        // window?.localStorage && window.localStorage.removeItem('token');
        await removeToken();
      }
    } catch (error) {
      console.debug('setToken', error);
      return error;
    }
  })();
};

export const loadToken = () => {
  try {
    // console.log('loadToken --------', window?.localStorage);
    // if (window?.localStorage) {
    //   const token = window.localStorage.getItem('token');
    //   setToken(token);
    // }
    AsyncStorage.getItem('token', (error, result) => {
      if (!error) {
        console.log('loadToken ::', result);
        return setToken(result);
      }
    });
  } catch (error) {
    console.debug('loadToken', error);
  }
};

export const removeToken = async () => {
  console.debug('removeToken');
  try {
    delete axios.defaults.headers.Authorization;
    await AsyncStorage.removeItem('token');
  } catch (error) {
    console.debug('removeToken', error);
    return error;
  }
};
