import {AuthAction, AuthActionTypes, AuthState} from '../../types/auth';

const initialState: AuthState = {
  user: null,
  isLoggedIn: false,
  error: null
}

export const authReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthActionTypes.AUTH_LOGIN:
      return {...state, user: action.payload, isLoggedIn: true, error: null}
    case AuthActionTypes.AUTH_LOGIN_ERROR:
      return {user: null, isLoggedIn: false, error: action.payload}
    case AuthActionTypes.AUTH_LOGOUT:
      return {user: null, isLoggedIn: action.payload, error: null}
    case AuthActionTypes.AUTH_CHECK_SUCCESS:
      return {user: action.payload, isLoggedIn: true, error: null}
    case AuthActionTypes.AUTH_CHECK_ERROR:
      return {user: null, isLoggedIn: false, error: action.payload}
    default:
      return state
  }
}