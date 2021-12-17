import {CourseAction, CourseActionTypes, CourseState} from '../../types/course';
import axios from 'axios';

const initialState: CourseState = {
  id: 0,
  title: 'New Course',
  description: 'Description',
  authorId: 'N/A',
  date: new Date()
}

export const courseReducer = (state = initialState, action: CourseAction): CourseState => {
  switch (action.type) {
    case CourseActionTypes.COURSE_GET_LAST_ID:
      return {...state, id: action.payload}
    case CourseActionTypes.COURSE_ADD_NEW:
      console.log(action.payload)
      return {...state, id: action.payload + 1}
    default:
      return state
  }
}
