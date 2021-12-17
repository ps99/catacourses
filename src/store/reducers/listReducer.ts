import {ListAction, ListActionTypes, ListState} from '../../types/list';

const initialState: ListState = {
  courses: [],
  page: 0,
  limit: 4,
  error: null,
  loading: false,
  isNotEmpty: true
}

export const listReducer = (state = initialState, action: ListAction): ListState => {
  switch (action.type) {
    case ListActionTypes.FETCH_LIST_COURSES_START:
      return {...state, loading: true, error: null}
    case ListActionTypes.FETCH_LIST_COURSES_SUCCESS:
      if(action.payload.length < state.limit) {
        state.isNotEmpty = false
      }
      return {...state, page: state.page + 1, courses: [...state.courses, ...action.payload]}
    case ListActionTypes.FETCH_LIST_COURSES_ERROR:
      return {...state, error: action.payload, courses: []}
    default:
      return state
  }
}
