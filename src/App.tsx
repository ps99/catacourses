
import React, { useState } from 'react';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Layout from './components/Layout/Layout'
// import {CourseModel} from './mockfileModel'
import {apiStates, useApi} from './tools';
import './scss/App.scss';



function App(props:any) {
  const [ pageCount, setPageCount ] = useState(1);
  let { state, error, data } = useApi(pageCount);

  console.log(data)

  function updateCurrentPage() {
    setPageCount(pageCount + 1);
    console.log(pageCount)
  }

  switch(state) {
    case apiStates.ERROR:
      return <div>ERROR: {error || 'General error'}</div>;
    case apiStates.SUCCESS:
      return (
        <>
          <Header />
          <Layout data={data}/>
          <Footer updateCurrentPage={updateCurrentPage} />
        </>
      )
    case apiStates.LOADING:
      default:
        return <div>loading..</div>;
  };
}

export default App;
