import React, { useState } from "react";
import "./topbar.css";

function Topbar({ setSearch, search, user }) {
  function handleSearch(e) {
    setSearch(e.target.value);
  }
  return (
    <>
      <div className="topbarContainer">
        <div className="topbarLeft">
          <span className="logo">Health Us</span>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
            🔍
            <input
              placeholder="Search for"
              className="searchInput"
              onChange={(e) => handleSearch(e)}
            />
          </div>
        </div>
        <div className="topbarRight">
          <img src="/images/person.jpg" alt="" className="topbarImg" />
          Current User: {user.username}
        </div>
      </div>
    </>
  );
}

export default Topbar;
