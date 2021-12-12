import {combineReducers} from 'redux';
import {courseReducer} from './courseReducer';
import {authReducer} from './authReducer';

export const rootReducer = combineReducers({
  course: courseReducer,
  auth: authReducer,
})

export type RootState = ReturnType<typeof rootReducer>