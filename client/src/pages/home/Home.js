import React, { useState } from "react";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";
import "./home.css";

function Home({ posts, setPosts, user }) {
  const [search, setSearch] = useState("");

  return (
    <>
      <Topbar search={search} setSearch={setSearch} user={user} />
      <div className="homeContainer">
        <Sidebar user={user} />
        <Feed posts={posts} setPosts={setPosts} user={user} search={search} />
        <Rightbar />
      </div>
    </>
  );
}

export default Home;
