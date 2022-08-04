import React, { useState } from "react";

import "./navBar.css";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <header>
      <div>
        <Link to="/home">Home</Link>
      </div>
      <div>
        {user ? (
          <>
            <Link to="/calendar">Calendar</Link>
            {/* <Link to="/feed">Feed</Link> */}

            <button onClick={handleLogoutClick}>Logout</button>
          </>
        ) : (
          <div>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default NavBar;
