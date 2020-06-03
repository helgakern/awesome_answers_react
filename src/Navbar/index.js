import React from "react";
import { NavLink } from "react-router-dom";
import CurrentDateTime from "../CurrentDateTime";

function Navbar(props) {
  // props looks like { currentUser: { first_name: 'jon' }}
  const { currentUser, signOut } = props; // object destructuring
  return (
    <nav className="ui secondary pointing menu">
      <NavLink className="item" to="/">
        Home
      </NavLink>
      <NavLink className="item" to="/questions">
        Questions Index
      </NavLink>
      <NavLink className="item" to="/questions/new">
        New Question?
      </NavLink>
      <div className="right menu">
        <div className="ui dropdown item">
          Language <i className="dropdown icon"></i>
          <div className="menu">
            <a className="item" href="#">
              English
            </a>
            <a className="item" href="#">
              Russian
            </a>
            <a className="item" href="#">
              Spanish
            </a>
          </div>
        </div>
        {!currentUser && (
          <NavLink className="ui small blue button" to="/sign_in">
            Sign In
          </NavLink>
        )}
        {currentUser && (
          <>
            <span className="item">Hello {currentUser.first_name}</span>
            <NavLink className="ui small red button" to="/" onClick={signOut}>
              Sign Out
            </NavLink>
          </>
        )}
        <CurrentDateTime />
      </div>
    </nav>
  );
}

export default Navbar;
