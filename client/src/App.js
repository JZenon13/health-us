import Home from "./pages/home/Home";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import CalendarPage from "./components/calendar/CalendarPage";
import Login from "./components/login/Login";
import SignUp from "./components/login/SignUp";
import Feed from "./components/feed/Feed";
import NavBar from "./components/navBar/NavBar";
import Homes from "./components/navBar/Homes";

// sudo service postgresql start
function App() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        console.log(r);
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/posts")
      .then((r) => r.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <div>
        {user ? (
          <>
            <Routes>
              <Route
                path="/home"
                element={<Home user={user} posts={posts} setPosts={setPosts} />}
              />
              <Route
                path="/calendar"
                element={<CalendarPage user={user} setPosts={setPosts} />}
              />
              <Route
                path="/feed"
                element={<Feed user={user} posts={posts} setPosts={setPosts} />}
              />
            </Routes>
          </>
        ) : (
          <>
            <Routes>
              <Route path="/home" element={<Homes user={user} />} />
              <Route path="/" element={<Homes user={user} />} />
              <Route path="/signup" element={<SignUp setUser={setUser} />} />
              <Route path="/login" element={<Login setUser={setUser} />} />
            </Routes>
          </>
        )}
      </div>
    </>
  );
}

export default App;
