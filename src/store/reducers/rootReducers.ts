import {combineReducers} from 'redux';
import {courseReducer} from './courseReducer';
import {authReducer} from './authReducer';
import {listReducer} from './listReducer'

export const rootReducer = combineReducers({
  course: courseReducer,
  auth: authReducer,
  list: listReducer
})

export type RootState = ReturnType<typeof rootReducer>