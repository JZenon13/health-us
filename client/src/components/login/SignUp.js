import React, { useState } from "react";
import "./signUp.css";
function SignUp({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        email,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }

  return (
    <div className="signUpPage">
      <div className="signUpPage">
        <form onSubmit={handleSubmit}>
          <h1 className="centerSignUp">
            <b>Health Us</b>
          </h1>
          <label className="centerSignUp" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className="centerSignUp" htmlFor="username">
            Email
          </label>
          <input
            type="text"
            id="username"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="centerSignUp" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <label htmlFor="password" className="centerSignUp">
            Password Confirmation
          </label>
          <input
            type="password"
            id="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            autoComplete="current-password"
          />
          <button className="centerButtons" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
