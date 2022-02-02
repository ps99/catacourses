import Home from '../HomePage/Home';
import Login from '../LoginPage/Login';
import NewCourse from '../NewCoursePage/NewCourse';
import { Switch, Route } from 'react-router-dom';

export const Layout = () => {
  return (
    <Switch>
      <Route path='/login'>
        <Login/>
      </Route>
      <Route path='/add'>
        <NewCourse />
      </Route>
      <Route exact path='/'>
        <Home />
      </Route>
    </Switch>
  )
}

export default Layout;