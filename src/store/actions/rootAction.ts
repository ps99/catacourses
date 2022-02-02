import * as CourseAction from './courseAction';
import * as AuthAction from './authAction';
import * as ListAction from './listAction';

export default {
  ...CourseAction,
  ...AuthAction,
  ...ListAction
}