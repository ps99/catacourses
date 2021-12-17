import {CourseAction, CourseActionTypes, CourseState} from '../../types/course';

const initialState: CourseState = {
  courses: [],
  page: 0,
  limit: 3,
  error: null,
  loading: false,
  isNotEmpty: true
}

export const courseReducer = (state = initialState, action: CourseAction): CourseState => {
  switch (action.type) {
    case CourseActionTypes.FETCH_COURSES_SUCCESS:
      if(action.payload.length < state.limit) {
        state.isNotEmpty = false
      }
      return {...state, page: state.page + 1, courses: [...state.courses, ...action.payload]}
    case CourseActionTypes.FETCH_COURSES_ERROR:
      return {...state, error: action.payload, courses: []}
    default:
      return state
  }
}