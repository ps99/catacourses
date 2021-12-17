import {Dispatch} from 'redux';
import axios from 'axios';
import {ListAction, ListActionTypes, ListState} from '../../types/list';

export const fetchCourses = (page:number, limit:number) => {
  const baseUrl = 'http://localhost:3000/';
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
