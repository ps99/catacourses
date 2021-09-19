
import { useState, useContext, createContext, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from 'react-router-dom';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Layout from './components/Layout/Layout'
import {apiStates, useApi} from './tools';
import {AuthManager, IUser} from './services/Auth.services'
import './scss/App.scss';



const App = () => {
  const [authState, setAuthState] = useState<JsonWebKey | null>(null);

  async function checkAuth() {
    let userData = null;

    await AuthManager().check().then(user => {
      userData = user
      setAuthState(userData);
    });

    return userData;
  }

  useEffect(() => {
    checkAuth();
  }, []);


  return (
    <Router>
      <Header checkAuth={checkAuth} currentState={authState} />
      <Layout checkAuth={checkAuth} currentState={authState} />
      <Footer />
    </Router>
  )
}

export default App;
