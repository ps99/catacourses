import {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import { authLogout } from '../../store/actions/authAction';

export const Header = () => {
  const {isLoggedIn} = useTypedSelector(state => state.auth)
  const {authCheck, authLogout} = useActions()

  const handleLogout = async () => {
    if(isLoggedIn) {
      await authLogout();
    }
  }

  useEffect(() => {
    (async () => {
      await authCheck();
    })()
  }, [isLoggedIn])

  return (
    <header>
      <div className="header">
        <ul className="header_navbar">
          <li><NavLink exact to="/">Home</NavLink></li>
          {isLoggedIn && <li><NavLink to="/add">Add New Course</NavLink></li>}
        </ul>
        <ul className="header_navbar align-right">
          <li><NavLink to="/login" onClick={handleLogout}>{isLoggedIn ? 'Logout' : 'Login'}</NavLink></li>
        </ul>
      </div>
    </header>
  )
}

export default Header;
