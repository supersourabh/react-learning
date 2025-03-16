import React from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import Contact from "./Contact";

export default function ContactLayout() {
  return (
    <>
      <Contact />
      <Outlet />
    </>
  );
}
