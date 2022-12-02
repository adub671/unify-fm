import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import AuthModal from "./auth/AuthModal";
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
              <AuthModal isLogin={true} />
            </li>
            <li className="nav-link">
              <AuthModal isLogin={false} />
            </li>
          </>
        )}

        <li className="nav-link">
          <NavLink to="/stations" exact={true} activeClassName="active">
            Stations
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
