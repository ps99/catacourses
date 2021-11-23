export interface CourseState {
  users: any[];
  loading: boolean;
  error: null | string;
}

export enum CourseActionTypes {
  FETCH_COURSES = 'FETCH_COURSES',
  FETCH_COURSES_SUCCESS = 'FETCH_COURSES_SUCCESS',
  FETCH_COURSES_ERROR = 'FETCH_COURSES_ERROR'
}

interface FetchCoursesAction {
  type: CourseActionTypes.FETCH_COURSES;
  payload?: any;
}

interface FetchCoursesSuccessAction {
  type: CourseActionTypes.FETCH_COURSES_SUCCESS;
  payload?: any;
}

interface FetchCoursesErrorAction {
  type: CourseActionTypes.FETCH_COURSES_ERROR;
  payload?: any;
}

export type CourseAction = FetchCoursesAction | FetchCoursesSuccessAction | FetchCoursesErrorAction
