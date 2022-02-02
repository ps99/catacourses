import {Dispatch} from 'redux';
import axios from 'axios';
import {CourseAction, CourseActionTypes, CourseState} from '../../types/course';

const baseUrl = 'http://localhost:3030/';

export const getCoursesLastId = () => {
  return async (dispatch: Dispatch<CourseAction>) => {
    const response = await axios.get(`${baseUrl}courses`, {
      params: {_sort: 'id', _order: 'desc', _limit: 1}
    });
    const lastId = response.data[0].id;
    console.log(lastId)
    dispatch({type: CourseActionTypes.COURSE_GET_LAST_ID, payload: lastId});
  }
}

export const addNewCourse = (newCourse: CourseState) => {
  return async (dispatch: Dispatch<CourseAction>) => {
    const headers: any = { // TODO: change type <any> - ?
      'Content-Type': 'application/json;charset=utf-8'
    };
    axios.post(`${baseUrl}courses`, newCourse, headers)
      .then((response) => {
        dispatch({type: CourseActionTypes.COURSE_ADD_NEW, payload: newCourse.id});
      });
  }
}

export const updateCourseRating = (targetCourse: CourseState) => {
  return async (dispatch: Dispatch<CourseAction>) => {
    const headers: any = { // TODO: change type <any> - ?
      'Content-Type': 'application/json;charset=utf-8'
    };
    await axios.put(`${baseUrl}courses/${targetCourse.id}`,
      targetCourse, headers);
    dispatch({type: CourseActionTypes.COURSE_UPDATE_RATING, payload: targetCourse});
  }
}
