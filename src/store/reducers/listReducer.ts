import {ListAction, ListActionTypes, ListState} from '../../types/list';

const initialState: ListState = {
  courses: [],
  searchResult: [],
  page: 0,
  limit: 4,
  error: null,
  loading: false,
  isOver: false,
  isSearch: false
}

export const listReducer = (state = initialState, action: ListAction): ListState => {
  switch (action.type) {
    case ListActionTypes.FETCH_LIST_COURSES_START:
      return {...state, loading: true, error: null}
    case ListActionTypes.FETCH_LIST_COURSES_SUCCESS:
      state.isOver = action.payload.length < state.limit
      return {...state, loading: false, page: state.page + 1, courses: [...state.courses, ...action.payload]}
    case ListActionTypes.FETCH_LIST_COURSES_ERROR:
      return {...state, error: action.payload, courses: []}

    case ListActionTypes.FETCH_SEARCH_COURSES_START:
      return {...state, loading: true, error: null, searchResult: [], isSearch: true}
    case ListActionTypes.FETCH_SEARCH_COURSES_SUCCESS:
      return {...state, searchResult: action.payload}
    case ListActionTypes.FETCH_SEARCH_COURSES_END:
      return {...state, loading: false, error: null, searchResult: [], isSearch: false}
    default:
      return state
  }
}
