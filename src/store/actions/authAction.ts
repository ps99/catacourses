import {Dispatch} from 'redux';
import axios from 'axios';
import {AuthAction, AuthActionTypes} from '../../types/auth';

const ITEM_NAME = 'user';
export const authLogin = (id:any, password = '') => {
  return async (dispatch: Dispatch<AuthAction>) => {
    const response = await axios.get('http://localhost:3030/users', {
      params: {id: id, password: password}
    });
    if(response.data[0]) {
      localStorage.setItem(ITEM_NAME, id)
      console.log(3, response.data[0])
      dispatch({type: AuthActionTypes.AUTH_LOGIN, payload: id});
    } else {
      localStorage.removeItem(ITEM_NAME)
      dispatch({type: AuthActionTypes.AUTH_LOGIN_ERROR, payload: 'Login Error!'});
    }
  }
}

export const authCheck = () => {
  return async (dispatch: Dispatch<AuthAction>) => {
    const response = await localStorage.getItem(ITEM_NAME);
    if(response) {
      dispatch({type: AuthActionTypes.AUTH_CHECK_SUCCESS, payload: response});
    } else {
      localStorage.removeItem(ITEM_NAME)
      dispatch({type: AuthActionTypes.AUTH_CHECK_ERROR, payload: 'Check Error!'});
    }
  }
}

export const authLogout = () => {
  return async (dispatch: Dispatch<AuthAction>) => {
    const isLoggedIn = false;
    await localStorage.removeItem(ITEM_NAME);
    dispatch({type: AuthActionTypes.AUTH_LOGOUT, payload: isLoggedIn});
  }
}