import React, { useState, useEffect } from "react";
import Share from "../share/Share";
import Post from "../post/Post";
import "./feed.css";

function Feed({ user, posts, setPosts, search }) {
  const [feed, setFeed] = useState([]);
  const [showComments, setShowComments] = useState([]);
  useEffect(() => {
    fetch("/posts")
      .then((r) => r.json())
      .then((data) => setFeed(data));
  }, [showComments]);

  const filteredPosts = feed.filter((f) =>
    f.user.username.toLowerCase().includes(search.toLowerCase())
  );

  const everyPost = filteredPosts.map((post) => {
    return (
      <Post
        key={post.id}
        post={post}
        user={user}
        setPosts={setPosts}
        showComments={showComments}
        setShowComments={setShowComments}
      />
    );
  });

  return (
    <div className="feedbar">
      <div className="feedWrapper">
        <Share user={user} setPosts={setPosts} />
        {everyPost}
      </div>
    </div>
  );
}

export default Feed;
