import React, { useState, useEffect } from "react";
import "./sidebar.css";

function Sidebar({ user }) {
  const [friendList, setFriendList] = useState([]);
  const [showMore, setShowMore] = useState(false);
  useEffect(() => {
    fetch(`/friends/${user.id}`)
      .then((res) => res.json())
      .then((data) => setFriendList(data));
  }, []);

  function handleShow() {
    setShowMore(!showMore);
  }
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <span className="sidebarListItemText">
              <u>Friend List</u>
            </span>
          </li>
        </ul>
        <button className="sidebarButton" onClick={handleShow}>
          {showMore ? "Show Less" : "Show More"}
        </button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {friendList?.map((friend) => {
            return <li className="sidebarFriend">{friend.name}</li>;
          })}

          <span className="sidebarFriendName">{user.username}</span>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
