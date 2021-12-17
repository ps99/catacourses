export interface ListState {
  courses: any[];
  page: number;
  limit: number;
  loading: boolean;
  error: null | string;
  isNotEmpty: boolean;
  rating?: number;
}

export enum ListActionTypes {
  FETCH_LIST_COURSES_START = 'FETCH_COURSES_START',
  FETCH_LIST_COURSES_SUCCESS = 'FETCH_COURSES_SUCCESS',
  FETCH_LIST_COURSES_ERROR = 'FETCH_COURSES_ERROR',
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

export type ListAction = FetchCoursesAction | FetchCoursesSuccessAction | FetchCoursesErrorAction;
