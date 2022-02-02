import {CourseAction, CourseActionTypes, CourseState} from '../../types/course';
import axios from 'axios';

const initialState: CourseState = {
  id: 0,
  title: 'New Course',
  description: 'Description',
  authorId: 'N/A',
  date: new Date(),
  rating: null,
  ratingCollection: null
}

export const courseReducer = (state = initialState, action: CourseAction): CourseState => {
  switch (action.type) {
    case CourseActionTypes.COURSE_GET_LAST_ID:
      return {...state, id: action.payload}
    case CourseActionTypes.COURSE_ADD_NEW:
      return {...state, id: action.payload + 1}
    case CourseActionTypes.COURSE_UPDATE_RATING:
      return {...state, ...action.payload}
    default:
      return state
  }
}
