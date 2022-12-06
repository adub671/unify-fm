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
      <NavLink to="/" className="nav-logo">
        UNIFY.FM
      </NavLink>

      <div className="nav-links">
        <div className="nav-link">
          <NavLink to="/" exact={true} activeClassName="active">
            Home
          </NavLink>
        </div>
        <div className="nav-link">
          <NavLink to="/stations" exact={true} activeClassName="active">
            Stations
          </NavLink>
        </div>
      </div>
      <div className="nav-auth">
        {!user && (
          <>
            <div className="nav-link">
              <AuthModal isLogin={true} />
            </div>
            <div className="nav-link">
              <AuthModal isLogin={false} />
            </div>
          </>
        )}

        {user && (
          <>
            <div className="nav-link">Welcome {user.username}!</div>
            <div className="nav-link">
              <LogoutButton />
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
