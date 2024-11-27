import React from "react";
import { Link, NavLink, Outlet } from "react-router";

function MainLayout({ isLoggedIn, setIsLoggedIn }) {
  const handleLogout = () => {
    setIsLoggedIn(false); // Log out user
  };

  return (
    <div>
      <div className="top-bar">
        <Link to="/">
          <img src="bornholmerLogo.png" alt="Logo" className="logo" />
        </Link>
        <h1>Bornholmer Tours</h1>
        {isLoggedIn ? (
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
      <div className="breadcrumb">Home &gt; Section &gt; Page</div>
      <div className="layout">
        <div className="left-grid">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/travels">Travels</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/admin">Admin</NavLink>
            </li>
          </ul>
        </div>
        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
