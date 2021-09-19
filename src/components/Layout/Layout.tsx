import Home from '../HomePage/Home';
import Login from '../LoginPage/Login';
import AddNewCourse from '../NewCoursePage/AddNewCourse';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { useState } from 'react';

export const Layout = (props:any) => {
  const {data, checkAuth, currentState} = props
  return (
    <Switch>
      <Route path='/login'>
        <Login checkAuth={checkAuth} currentState={currentState}/>
      </Route>
      <Route path='/add'>
        <AddNewCourse />
      </Route>
      <Route exact path='/'>
        <Home data={data}/>
      </Route>
    </Switch>
  )
}

export default Layout;