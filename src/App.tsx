
import React, { useState, useContext, createContext } from 'react';
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
import './scss/App.scss';



function App(props:any) {
  const [pageCount, setPageCount] = useState(1);
  const [authState, setAuthState] = useState('default');
  let { state, error, data } = useApi(pageCount);

  function updateCurrentPage() {
    setPageCount(pageCount + 1);
  }

  function checkAuth() {
    return false;
    // return authState.user === '' ? false : true
  }

  switch(state) {
    case apiStates.ERROR:
      return <div>ERROR: {error || 'General error'}</div>;
    case apiStates.SUCCESS:
      return (
        <Router>
          <Header isLoggedIn={checkAuth} />
          <Layout data={data} updateCurrentPage={updateCurrentPage} />
          <Footer />
        </Router>
      )
    case apiStates.LOADING:
      default:
        return <div>loading..</div>;
  };
}

export default App;
