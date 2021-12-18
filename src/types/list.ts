export interface ListState {
  courses: any[];
  searchResult: any[];
  page: number;
  limit: number;
  loading: boolean;
  error: null | string;
  isNotEmpty: boolean;
  isSearch: boolean;
}

export enum ListActionTypes {
  FETCH_LIST_COURSES_START = 'FETCH_LIST_COURSES_START',
  FETCH_LIST_COURSES_SUCCESS = 'FETCH_LIST_COURSES_SUCCESS',
  FETCH_LIST_COURSES_ERROR = 'FETCH_LIST_COURSES_ERROR',
  FETCH_SEARCH_COURSES_START = 'FETCH_SEARCH_COURSES_START',
  FETCH_SEARCH_COURSES_SUCCESS = 'FETCH_SEARCH_COURSES_SUCCESS',
  FETCH_SEARCH_COURSES_END = 'FETCH_SEARCH_COURSES_END'
}

interface FetchCoursesAction {
  type: ListActionTypes.FETCH_LIST_COURSES_START;
  payload?: any;
}

interface FetchCoursesSuccessAction {
  type: ListActionTypes.FETCH_LIST_COURSES_SUCCESS;
  payload?: any;
}

interface FetchCoursesErrorAction {
  type: ListActionTypes.FETCH_LIST_COURSES_ERROR;
  payload?: any;
}
interface SearchCoursesAction {
  type: ListActionTypes.FETCH_SEARCH_COURSES_START;
  payload?: any;
}
interface SearchCoursesSuccessAction {
  type: ListActionTypes.FETCH_SEARCH_COURSES_SUCCESS;
  payload?: any;
}
interface SearchCoursesEndAction {
  type: ListActionTypes.FETCH_SEARCH_COURSES_END;
  payload?: any;
}

export type ListAction = FetchCoursesAction | FetchCoursesSuccessAction | FetchCoursesErrorAction | SearchCoursesAction | SearchCoursesSuccessAction | SearchCoursesEndAction;
