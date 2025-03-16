import React from "react";
import { Navigate, Route } from "react-router-dom";

export default function ({children}) {
  const userInfo = { id: 1, name: "sk", token: "null" };
  console.log(children);
  
  // alert("unauthorized redirecting to Home page");
  return userInfo && userInfo.token ? children : <Navigate to="/" />;
}
