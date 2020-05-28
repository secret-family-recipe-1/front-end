import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

const NavBar = () => {
  const [ loggedIn, setLoggedIn ] = useState(false)
  const user = useSelector(state => state.user)

  const logout= () => {
    if(loggedIn) {
      alert('You`ve been logged out ');
      localStorage.removeItem('token');
      localStorage.removeItem('id');
      setLoggedIn(false);
    }
  }

  useEffect(() => {
    if(Object.values(user).length !== 0) setLoggedIn(true);
  }, [user])

  return (
    <nav>
      <h2 className="logo">Secret Family Recipe Cookbook</h2>
      <div className="right-nav">
        <a target="blank" href="https://secret-family-recipe-ui.netlify.app/">Marketing</a>
        <Link onClick={logout} to="/login">{(loggedIn) ? 'Log Out' : 'Log In'}</Link>
      </div>
    </nav>
  );
}

export default NavBar;