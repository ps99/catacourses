import React from 'react';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Layout from './components/List/List'

import './scss/App.scss';

function App(props:any) {
  return (
    <div className="App">
      <Header />
      <Layout data={props.data}/>
      <Footer />
    </div>
  );
}

export default App;
