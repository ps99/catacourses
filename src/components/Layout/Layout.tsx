import Home from '../HomePage/Home';
import Login from '../LoginPage/Login';
import AddNewCourse from '../NewCoursePage/AddNewCourse';
import { Switch, Route } from 'react-router-dom';

export const Layout = () => {
  return (
    <Switch>
      <Route path='/login'>
        <Login/>
      </Route>
      <Route path='/add'>
        <AddNewCourse />
      </Route>
      <Route exact path='/'>
        <Home />
      </Route>
    </Switch>
  )
}

export default Layout;