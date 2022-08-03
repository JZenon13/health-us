import React, { useState } from "react";
import "./share.css";

function Share({ user, setPosts }) {
  const [newSharedPost, setNewSharedPost] = useState([]);
  const [newSharedImage, setNewSharedImage] = useState([]);
  const [showInputImg, setShowInputImg] = useState(false);

  function handleNewSharedPost(e) {
    setNewSharedPost(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();

    const newPost = {
      text: newSharedPost,
      likes: 0,
      unlikes: 0,
      user_id: user.id,
      img_url: newSharedImage,
    };

    fetch("/posts", {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: { "Content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((newPost) => setPosts(newPost));
  }

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/images/person.jpg" alt="" />
          <input
            placeholder="What's in your mind?"
            className="shareInput"
            onChange={(e) => handleNewSharedPost(e)}
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <span
                className="shareOptionText"
                onClick={() => setShowInputImg(!showInputImg)}
              >
                {showInputImg ? <b>Photo : </b> : <b>Photo ? </b>}
              </span>
              {showInputImg ? (
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  onChange={(e) => setNewSharedImage(e.target.value)}
                />
              ) : null}
            </div>
            {/* <div className="shareOption">
              <span className="shareOptionText">Exercise</span>
            </div> */}
            {/* <div className="shareOption">
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <span className="shareOptionText">Feelings</span>
            </div> */}
          </div>
          <button
            className="shareButton"
            type="submit"
            onClick={(e) => handleSubmit(e)}
          >
            Share
          </button>
        </div>
      </div>
    </div>
  );
}

export default Share;
