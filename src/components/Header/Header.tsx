import { useContext } from 'react';
import { NavLink } from 'react-router-dom';


export const Header = (props:any) => {
  let isLoggedIn = props.isLoggedIn();

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
          <li>{
            isLoggedIn ?
            <NavLink to="/logout">Logout</NavLink> :
            <NavLink to="/login">Login</NavLink>
          }</li>
        </ul>
      </div>
    </header>
  )
}

export default Header;
