import React, { useState } from "react";
import "./login.css";
function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }

  return (
    <div className="logInPage">
      <form onSubmit={handleSubmit}>
        <h1 className="centerStuff">Login</h1>
        <label className="centerStuff" htmlFor="username">
          Email
        </label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="centerStuff" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="centerButtons" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
