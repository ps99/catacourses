export interface CourseState {
  id: number;
  date: Date;
  title: string;
  description: string;
  authorId: string;
  rating?: number | null;
  ratingCollection?: object | null;
}

export enum CourseActionTypes {
  COURSE_GET_LAST_ID = 'COURSE_GET_LAST_ID',
  COURSE_ADD_NEW = 'COURSE_ADD_NEW',
  COURSE_UPDATE_RATING = 'COURSE_UPDATE_RATING'
}

interface CourseGetLastIdAction {
  type: CourseActionTypes.COURSE_GET_LAST_ID;
  payload?: any;
}

interface CourseAddNewAction {
  type: CourseActionTypes.COURSE_ADD_NEW;
  payload?: any;
}

interface CourseUpdateRatingAction {
  type: CourseActionTypes.COURSE_UPDATE_RATING;
  payload?: any;
}

export type CourseAction = CourseGetLastIdAction | CourseAddNewAction | CourseUpdateRatingAction;