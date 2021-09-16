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
  return (
    <Switch>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/add'>
        <AddNewCourse />
      </Route>
      <Route exact path='/'>
        <Home data={props.data}/>
      </Route>
    </Switch>
  )
}

export default Layout;