import React, { useState, useEffect } from "react";
import "./sidebar.css";

function Sidebar({ user }) {
  const [friendList, setFriendList] = useState([]);
  const [showMore, setShowMore] = useState(false);
  useEffect(() => {
    fetch(`/users/${user.id}/friends`)
      .then((res) => res.json())
      .then((data) => setFriendList(data));
  }, []);

  function handleShow() {
    setShowMore(!showMore);
  }

  console.log(friendList);
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <span className="sidebarListItemText">
          <u>Friend List</u>
        </span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            {friendList?.map((friend) => {
              return (
                <li key={friend.id} className="sidebarListItem">
                  {friend.name}
                </li>
              );
            })}
          </li>
        </ul>
        <button className="sidebarButton" onClick={handleShow}>
          {showMore ? "Show Less" : "Show More"}
        </button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          <span className="sidebarFriendName">{user.username}</span>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
