import React, { useState, useEffect } from "react";
import "./post.css";

function CommentBox({
  postID,
  user,
  setShowComments,
  showComments,
  commentBox,
  eachPostComment,
}) {
  const [commentText, setCommentText] = useState("");

  useEffect(() => {
    fetch(`/posts/${postID}`)
      .then((r) => r.json())
      .then((data) => setShowComments(data));
  }, [commentBox]);

  const eachComment = eachPostComment.comments?.map((comment) => {
    return (
      <>
        <h3>{user.username} says</h3>
        <p key={comment.id} className="postCommentText">
          {comment.text}
        </p>
      </>
    );
  });

  function handleNewComment(e) {
    e.preventDefault();

    const newComment = {
      text: commentText,
      user_id: user.id,
    };

    fetch(`/posts/${postID}/comments`, {
      method: "POST",
      body: JSON.stringify(newComment),
      headers: { "Content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((newComment) => setShowComments(newComment));
  }

  return (
    <>
      <div>
        {eachComment}
        <input
          type="text"
          id="fname"
          name="fname"
          className="commentInput"
          onChange={(e) => setCommentText(e.target.value)}
        />
        <button
          className="postButton"
          type="submit"
          onClick={(e) => handleNewComment(e)}
        >
          Post
        </button>
        <div></div>
      </div>
    </>
  );
}

export default CommentBox;
