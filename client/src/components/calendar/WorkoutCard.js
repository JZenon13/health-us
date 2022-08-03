import React, { useState } from "react";
import "./workoutCard.css";
import { Calendar } from "react-big-calendar";
function WorkoutCard({
  setWorkoutCard,
  workoutCard,
  newExercise,
  user,
  setPosts,
  mainCalendar,
}) {
  const [postText, setPostText] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  function toggleClose() {
    setWorkoutCard(!workoutCard);
  }

  function handleNewPost() {
    setWorkoutCard(!workoutCard);
    const newPost = {
      text: postText,
      likes: 0,
      unlikes: 0,
      img_url: imgUrl,
      user_id: user.id,
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
    <div>
      <div className="modal">
        <div className="overlay"></div>
        <div className="modal-content">
          <h2>Type: {newExercise.title}</h2>
          <p>
            Exercises:
            {newExercise.name.map((e) => {
              return <>{e}, </>;
            })}
          </p>
          <p>Total Time: {newExercise.total_time}hrs!</p>
          <label>How was it? </label>
          <input
            type="text"
            placeholder="Details!"
            onChange={(e) => setPostText(e.target.value)}
          />
          <label> Picture </label>
          <input
            type="text"
            placeholder="Image URL"
            onChange={(e) => setImgUrl(e.target.value)}
          />
          <button className="close-modal" onClick={toggleClose}>
            CLOSE
          </button>
          {/* <div className="smallCalendar">{mainCalendar}</div> */}
          <button onClick={handleNewPost}>Post to Feed</button>
        </div>
      </div>
    </div>
  );
}

export default WorkoutCard;
