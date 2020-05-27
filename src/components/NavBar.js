import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

const NavBar = (props) => {
// const {loggedIn, setLoggedIn} = props


  const logout= () => {
    alert('You`ve been logged out ')
    localStorage.removeItem('token')
    localStorage.removeItem('id')
  }

  return (
    <nav>
<h2>Secret Family Recipies</h2>
 
  {/* <Link onClick={logout} to="/login">{(loggedIn) ? 'Log Out' : 'Log In'}</Link> */}
    <Link to='/login' onClick={logout}> Log Out </Link>
    </nav>
  );
}

export default NavBar;