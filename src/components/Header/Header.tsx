import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {AuthManager} from '../../services/Auth.services'


export const Header = (props:any) => {
  const [buttonName, setButtonName] = useState<any>('Login');
  const {currentState} = props;
  const handleLogout = async () => {
    if(buttonName === 'Logout') {
      AuthManager().logout();
      props.checkAuth();
      setButtonName('Login');
    }
  }

  useEffect(() => {
    currentState ? setButtonName('Logout') : setButtonName('Login');
  }, [currentState]);

  // useEffect(() => {
  //   prevButtonName === buttonName ? setButtonName('Login') : setButtonName('Logout');
  // });

  return (
    <header>
      <div className="header">
        <ul className="header_navbar">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/add">Add New Course</NavLink></li>
        </ul>
        <ul className="header_navbar align-right">
          <li className="header_search">
            <input type="search" placeholder="Search a course..." />
          </li>
          <li>
            <NavLink to="/login" onClick={handleLogout}>{buttonName}</NavLink>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header;
