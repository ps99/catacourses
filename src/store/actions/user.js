export function auth(login, password, isLogin) {
  return async dispatch => {
    const authData = {
      login,
      password,
      isLogin
    }
  }
}