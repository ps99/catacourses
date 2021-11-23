import {CourseAction, CourseActionTypes, CourseState} from '../../types/course';

const initialState: CourseState = {
  users: [],
  loading: false,
  error: null
}

export const courseReducer = (state = initialState, action: CourseAction): CourseState => {
  switch (action.type) {
    case CourseActionTypes.FETCH_COURSES:
      return {loading: true, error: null, users: []}
    case CourseActionTypes.FETCH_COURSES_SUCCESS:
      return {loading: false, error: null, users: action.payload}
    case CourseActionTypes.FETCH_COURSES_ERROR:
      return {loading: false, error: action.payload, users: []}
    default:
      return state
  }
}