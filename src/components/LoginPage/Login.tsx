import React, { useContext, createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from 'react-router-dom';

async function getAuth(authState:any) {
  const obj = await authState && {
    user: 'admin',
    password: '12345',
    message: 'Success. Logged in!'
  }
  return obj; 
}

export const Login = (props:any) => {
  const [authState, setAuthState] = useState({
    user: '',
    password: '',
    message: ''
  });
  const history = useHistory();
  const handleChange = (e:any) => {
    const {id, value} = e.target
    setAuthState({
      ...authState,
      [id]: value
    })
  }
  const handleSubmitClick = async (e:any) => {
    e.preventDefault();
    
    const user = await getAuth(authState);

    if(user) {
      props.updateUser(user);
      history.push('/');
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
            value={authState.user}
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
