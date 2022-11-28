import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import "./NavBar.css";

const NavBar = () => {
  const user = useSelector((state) => state.session.user);

  return (
    <nav>
      <ul className="link-container">
        <li className="nav-link">UNIFY.FM</li>
        <li className="nav-link">
          <NavLink to="/" exact={true} activeClassName="active">
            Home
          </NavLink>
        </li>
        {!user && (
          <>
            <li className="nav-link">
              <NavLink to="/login" exact={true} activeClassName="active">
                Login
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/sign-up" exact={true} activeClassName="active">
                Sign Up
              </NavLink>
            </li>
          </>
        )}

        <li className="nav-link">
          <NavLink to="/stations" exact={true} activeClassName="active">
            Stations
          </NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/users" exact={true} activeClassName="active">
            Users
          </NavLink>
        </li>
        {user && (
          <li className="nav-link">
            <LogoutButton />
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
