import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

export const Login = (props:any) => {
  const {currentState} = props;
  const [authState, setAuthState] = useState({
    login: '',
    password: '',
    message: ''
  });

  useEffect(() => {
    if(currentState) {
      history.push('/');
    }
  }, [props.currentState])

  const history = useHistory();
  const handleChange = (e:any) => {
    const {id, value} = e.target

    setAuthState({
      ...authState,
      [id]: value
    })
  }

  const {user, isLoggedIn, error} = useTypedSelector(state => state.auth)
  const {authLogin} = useActions()

  const handleSubmitClick = async (e:any) => {
    e.preventDefault();
    const {login, password} = authState;
    await authLogin(login, password);
    const id = localStorage.getItem('user')
    if(id) {
      history.push('/');
      props.checkAuth();
    }
  }

  return (
    <main>
      <div className="loginForm">
        <h1>Sign In</h1>
        <form>
          <input
            id="login"
            className="form-control"
            type="text"
            placeholder="Login"
            value={authState.login}
            autoComplete="off"
            onChange={handleChange} />
          <input
            id="password"
            type="password"
            className="form-control"
            placeholder="Password"
            value={authState.password}
            onChange={handleChange} />
          <button
            className="btn btn-primary btn-lg"
            onClick={handleSubmitClick}
            type='submit'>Sign In</button>
        </form>
        <div className="alert alert-success mt-2" style={{display: authState.message ? 'block' : 'none' }} role="alert"
          >{authState.message}</div>
      </div>
    </main>
  )
}

export default Login;
