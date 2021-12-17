import {useEffect} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Layout from './components/Layout/Layout';
import {useActions} from './hooks/useActions';
import './scss/App.scss';


const App = () => {
  const {authCheck} = useActions();

  useEffect(() => {
    authCheck();
  }, []);

  return (
    <Router>
      <Header />
      <Layout />
      <Footer />
    </Router>
  )
}

export default App;
