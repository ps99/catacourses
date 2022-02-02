export interface AuthState {
  user: string | null;
  isLoggedIn: boolean;
  error: null | string;
}

export enum AuthActionTypes {
  AUTH_LOGIN = 'AUTH_LOGIN',
  AUTH_LOGIN_ERROR = 'AUTH_LOGIN_ERROR',
  AUTH_CHECK_SUCCESS = 'AUTH_CHECK_SUCCESS',
  AUTH_CHECK_ERROR = 'AUTH_CHECK_ERROR',
  AUTH_LOGOUT = 'AUTH_LOGOUT'
}

interface AuthLoginAction {
  type: AuthActionTypes.AUTH_LOGIN;
  payload?: any;
}

interface AuthLoginErrorAction {
  type: AuthActionTypes.AUTH_LOGIN_ERROR;
  payload?: any;
}

interface AuthCheckSuccessAction {
  type: AuthActionTypes.AUTH_CHECK_SUCCESS;
  payload?: any;
}

interface AuthCheckErrorAction {
  type: AuthActionTypes.AUTH_CHECK_ERROR;
  payload?: any;
}

interface AuthLogoutAction {
  type: AuthActionTypes.AUTH_LOGOUT;
  payload?: any;
}

export type AuthAction = AuthLoginAction | AuthLoginErrorAction | AuthCheckSuccessAction | AuthCheckErrorAction | AuthLogoutAction