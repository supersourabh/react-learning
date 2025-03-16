import React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorElement() {
    const error = useRouteError()
  return (
    <>
      <h1>Error Occured</h1><br/>
      <h2>{error.message}</h2>
    </>
  );
}
