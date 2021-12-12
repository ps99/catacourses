
import {useState, useEffect} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Layout from './components/Layout/Layout';
import { useTypedSelector } from './hooks/useTypedSelector';
import { useActions } from './hooks/useActions';
import { authLogout } from './store/actions/authAction';
import './scss/App.scss';

const App = () => {
  const {isLoggedIn} = useTypedSelector(state => state.auth)
  const {authCheck} = useActions()
  const [authState, setAuthState] = useState<JsonWebKey | null>(null);

  async function checkAuth() {
    let userData = null;

    await AuthManager().check().then(user => {
      userData = user
      setAuthState(userData);
    });

    return userData;
  }

  return (
    <Router>
      <Header />
      <Layout currentState={authState} />
      <Footer />
    </Router>
  )
}

export default App;
