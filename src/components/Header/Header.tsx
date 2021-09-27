import { NavLink } from 'react-router-dom';
import { AuthManager } from '../../services/Auth.services'

export const Header = (props:any) => {
  const {currentState} = props;
  const handleLogout = async (event:any) => {
    const name = event.target.textContent
    if(name === 'Logout') {
      AuthManager().logout();
      props.checkAuth();
    }
  }

  return (
    <header>
      <div className="header">
        <ul className="header_navbar">
          <li><NavLink exact to="/">Home</NavLink></li>
          {currentState 
            ? <li><NavLink to="/add">Add New Course</NavLink></li>
            : null}
        </ul>
        <ul className="header_navbar align-right">
          <li>
            <NavLink to="/login" onClick={handleLogout}>{currentState ? 'Logout' : 'Login'}</NavLink>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header;
