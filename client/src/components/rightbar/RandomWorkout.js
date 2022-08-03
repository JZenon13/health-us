import React, { useState } from "react";
import "./rightbar.css";

function RandomWorkout({ randomWOD }) {
  const [like, setLike] = useState(false);
  const [notLike, setNotLike] = useState(false);
  return (
    <>
      <div className="workoutCard">
        <div>
          <h2 className="centerStuff">{randomWOD.Title}</h2>
        </div>

        <div className="thumbsUp">
          <img src="https://cdn-icons-png.flaticon.com/512/126/126473.png"></img>
          {/*thumbs up*/}
          <img src="https://cdn-icons.flaticon.com/png/512/880/premium/880605.png?token=exp=1659494583~hmac=fbeb87f4fed6450c735d83d4c568f2f2"></img>
          {/*thumbs up black*/}
        </div>

        <p className="description">{randomWOD.Description}</p>
      </div>
    </>
  );
}

export default RandomWorkout;
