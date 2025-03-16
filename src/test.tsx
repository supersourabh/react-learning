import React, { use, useEffect, useState } from "react";

export default function Test() {
  const [res, setRes] = useState(false)
  const data = use(
    new Promise((resolve, reject) => {
      let num = Math.floor(Math.random() * 100);
      num > 50 ? resolve("resolved") : reject("rejected");
    })
      .then(() => "resolved")
      .catch(() => "rejected")
  );

  return (
    <div>
      <h1>
        Hello : <span style={{ color: data === 'resolved'?"green":"red" }}>Promise {data} </span>
      </h1>
    </div>
  );
}
