import React from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";

export default function Layout() {

    const navigate = useNavigate();
  return (
    <>
      <nav>
        <div className="nav-container">
          <NavLink to="/">
            <div>Home </div>
          </NavLink>
          <NavLink to="/about">
            <div>About </div>
          </NavLink>
          <NavLink to="/contact">
            <div>Contact </div>
          </NavLink>
          <button onClick={()=>navigate("/about")} >Navigate</button>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
