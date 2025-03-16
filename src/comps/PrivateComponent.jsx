import React from "react";
import { Navigate, Route } from "react-router-dom";

export default function ({ childrens }) {
  const userInfo = { id: 1, name: "sk" };
  alert("unauthorized redirecting to Home page");
  return userInfo && userInfo.token ? { childrens } : <Navigate to="/" />;
}
