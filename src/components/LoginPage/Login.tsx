import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {useActions} from '../../hooks/useActions';
import { Redirect } from 'react-router-dom';

export const Login = () => {
  const [authState, setAuthState] = useState({
    login: '',
    password: '',
    message: ''
  });

  const {user, isLoggedIn} = useTypedSelector(state => state.auth)
  const {authLogin} = useActions()

  const handleChange = (e:any) => {
    const {id, value} = e.target

    setAuthState({
      ...authState,
      [id]: value
    })
  }

  useEffect(()=>{
    console.log('isLoggedIn: ',isLoggedIn)
  },[isLoggedIn])

  const handleSubmitClick = async (e:any) => {
    e.preventDefault();
    const {login, password} = authState;
    await authLogin(login, password);
  }

  return (
    
    <>
    {isLoggedIn ? <Redirect to="/" /> : <main>
      <div className="loginForm">
        <h1>Sign In - {user ? user : 'Guest'} - {isLoggedIn ? 'Logged In' : 'Logged Out'}</h1>
        <form>
          <input
            id="login" className="form-control" type="text"
            placeholder="Login" autoComplete="off"
            value={authState.login} onChange={handleChange} />
          <input
            id="password" className="form-control" type="password"
            placeholder="Password"
            value={authState.password} onChange={handleChange} />
          <button
            className="btn btn-primary btn-lg"
            type='submit'
            onClick={handleSubmitClick}>Sign In</button>
        </form>
        <div className="alert alert-success mt-2" style={{display: authState.message ? 'block' : 'none' }} role="alert"
          >{authState.message}</div>
      </div>
    </main>
    }
    </>
  )
}

export default Login;
