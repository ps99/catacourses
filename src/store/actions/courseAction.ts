import {Dispatch} from 'redux';
import axios from 'axios';
import {CourseAction, CourseActionTypes} from '../../types/course';

export const fetchCourses = (page = 1, limit = 4) => {
  return async (dispatch: Dispatch<CourseAction>) => {
    try {
      const response = await axios.get('http://localhost:3000/courses', {
        params: {_page: page, _limit: limit}
      })
      dispatch({type: CourseActionTypes.FETCH_COURSES_SUCCESS, payload: response.data});
    } catch (e) {
      dispatch({
        type: CourseActionTypes.FETCH_COURSES_ERROR,
        payload: 'Error happend'
      });
    }
  }
}
