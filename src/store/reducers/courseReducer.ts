import {CourseAction, CourseActionTypes, CourseState} from '../../types/course';

const initialState: CourseState = {
  courses: [],
  page: 0,
  limit: 9,
  loading: false,
  error: null,
  isNotEmpty: true
}

export const courseReducer = (state = initialState, action: CourseAction): CourseState => {
  switch (action.type) {
    case CourseActionTypes.FETCH_COURSES:
      return {...state, loading: true, error: null}
    case CourseActionTypes.FETCH_COURSES_SUCCESS:
      state.courses.push(...action.payload)
      if(action.payload.length < state.limit) {
        state.isNotEmpty = false
      }
      return {...state, page: state.page + 1, loading: false}
    case CourseActionTypes.FETCH_COURSES_ERROR:
      return {...state, loading: false, error: action.payload, courses: []}
    default:
      return state
  }
}