import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

const NavBar = () => {
  const auth = useContext(AuthContext);

  const history = useHistory();

  const handleLogOut = (e) => {
    e.preventDefault();
    auth.logOut();
    history.push('/');
  };

  return (
    <nav>
      <div className="nav-wrapper blue darken-1" style={{ padding: '0 2rem' }}>
        <span className="brand-logo">Shorten links</span>

        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to="/create">Create</NavLink>
          </li>
          <li>
            <NavLink to="/create">Links</NavLink>
          </li>
          <li>
            <NavLink to="/" onClick={handleLogOut}>
              LogOut
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
