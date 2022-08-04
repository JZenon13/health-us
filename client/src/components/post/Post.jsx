import React, { useState } from "react";
import CommentBox from "./CommentBox";
import "./post.css";

function Post({ post, user, setPosts, showComments, setShowComments }) {
  const [likes, setLike] = useState(post.likes);
  const [unlikes, setUnlike] = useState(post.unlikes);
  const [postText, setPostText] = useState(post.text);
  const [commentBox, setCommentBox] = useState(false);
  const [eachPostComment, setEachPostComment] = useState([]);
  const [userPost, setUserPost] = useState(false);

  const likeHandler = () => {
    setLike(likes + 1);
    const updatePost = {
      text: postText,
      likes: likes,
      unlikes: unlikes,
    };

    fetch(`/posts/${post.id}`, {
      method: "PATCH",
      body: JSON.stringify(updatePost),
      headers: { "Content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((updatePost) => setPosts(updatePost));
  };

  const unlikeHandler = () => {
    setUnlike(unlikes - 1);
    const updatePost = {
      text: postText,
      likes: likes,
      unlikes: unlikes,
    };
    fetch(`/posts/${post.id}`, {
      method: "PATCH",
      body: JSON.stringify(updatePost),
      headers: { "Content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((updatePost) => setPosts(updatePost));
  };

  function handleComments() {
    setCommentBox(!commentBox);

    fetch(`/posts/${post.id}`)
      .then((res) => res.json())
      .then((data) => setEachPostComment(data));
  }

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src="/images/person.jpg" alt="" />
            <span className="postUsername">{post.user.username}</span>
            {/* <span className="postDate">posted 5min ago</span> */}
          </div>
          <div className="postTopRight"></div>
        </div>
        <div className="postCenter">
          <span className="postText">{postText}</span>
          <img src={post.img_url} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src="/images/flex.png"
              alt="likeIcon"
              className="likeIcon"
              onClick={likeHandler}
            />
            <span className="postLikeCounter">{likes}</span>
            <img
              src="/images/weak.png"
              alt="unlikeIcon"
              className="likeIcon"
              onClick={unlikeHandler}
            />
            <span className="postUnLikeCounter">{unlikes}</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText" onClick={handleComments}>
              {post.comments.length === 1
                ? `${post.comments.length}  comment`
                : `${post.comments.length}  comments`}
            </span>
          </div>
        </div>
      </div>
      {commentBox && (
        <CommentBox
          postID={post.id}
          user={user}
          setShowComments={setShowComments}
          showComments={showComments}
          commentBox={commentBox}
          eachPostComment={eachPostComment}
        />
      )}
    </div>
  );
}

export default Post;
