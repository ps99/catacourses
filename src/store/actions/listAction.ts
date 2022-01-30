import {Dispatch} from 'redux';
import axios from 'axios';
import {ListAction, ListActionTypes} from '../../types/list';

const baseUrl = 'http://localhost:3030/';

export const fetchCourses = (page:number, limit:number) => {
  return async (dispatch: Dispatch<ListAction>) => {
    try {
      dispatch({type: ListActionTypes.FETCH_LIST_COURSES_START});
      const response = await axios.get(`${baseUrl}courses`, {
        params: {_page: page, _limit: limit}
      })
      dispatch({type: ListActionTypes.FETCH_LIST_COURSES_SUCCESS, payload: response.data});
    } catch (e) {
      dispatch({
        type: ListActionTypes.FETCH_LIST_COURSES_ERROR,
        payload: 'Error happend'
      });
    }
  }
}

export const searchCourses = (query: string) => {
  return async (dispatch: Dispatch<ListAction>) => {
    try {
      dispatch({type: ListActionTypes.FETCH_SEARCH_COURSES_START});
      const response = await axios.get(`${baseUrl}courses`, {
        params: {q: query}
      })
      dispatch({type: ListActionTypes.FETCH_SEARCH_COURSES_SUCCESS, payload: response.data});
    } catch (e) {
      dispatch({
        type: ListActionTypes.FETCH_LIST_COURSES_ERROR,
        payload: 'Error happend'
      });
    }
  }
}

export const searchPrevent = () => {
  return async (dispatch: Dispatch<ListAction>) => {
    dispatch({type: ListActionTypes.FETCH_SEARCH_COURSES_END});
  }
}
