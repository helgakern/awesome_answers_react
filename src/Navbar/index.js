import React from 'react';
import { NavLink } from 'react-router-dom';
import CurrentDateTime from '../CurrentDateTime';

function Navbar(props) {
  return(
    <nav>
      <NavLink to='/questions'>Questions Index</NavLink>
      <NavLink to='/questions/new'>New Question?</NavLink>
      <NavLink to='/sign_in'>Sign In</NavLink>
      <CurrentDateTime/>
    </nav>
  )
}

export default Navbar