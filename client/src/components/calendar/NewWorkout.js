import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "./calendarPage.css";
import WorkoutCard from "./WorkoutCard";

function NewWorkout({
  workoutPage,
  setWorkOutPage,
  setNewExercise,
  newExercise,
  newName,
  setNewName,
  allWorkouts,
  setallWorkouts,
  user,
  setUserWorkouts,
  setUserExercises,
  setPosts,
  mainCalendar,
}) {
  const [jumpRope, setJumpRope] = useState(false);
  const [jumpingJacks, setjumpingJacks] = useState(false);
  const [stairTraining, setStairTraining] = useState(false);
  const [buttKicks, setButtKicks] = useState(false);
  const [mountainClimber, setMountainClimber] = useState(false);
  const [bearCrawls, setBearCrawls] = useState(false);
  const [burpees, setBurpees] = useState(false);
  const [squatJacks, setSquatJacks] = useState(false);
  const [inchworm, setInchworm] = useState(false);
  const [highKnees, setHighKnees] = useState(false);
  const [donkeyKicks, setDonkeyKicks] = useState(false);
  const [corkscrew, setCorkscrew] = useState(false);
  const [flutterKicks, setFlutterKicks] = useState(false);
  const [skaters, setSkaters] = useState(false);
  const [plankJacks, setPlankJacks] = useState(false);
  const [boxJumps, setBoxJumps] = useState(false);
  const [jumpingLunges, setJumpingLunges] = useState(false);
  const [jumpForwardJogs, setJumpForwardJogs] = useState(false);
  const [sprinterSitups, setSprinterSitups] = useState(false);
  const [skipping, setSkipping] = useState(false);
  const [high, setHigh] = useState(false);
  const [sprinting, setSprinting] = useState(false);
  const [strengthTraining, setStrengthTraining] = useState(false);
  const [bodyWeightExercise, setBodyWeight] = useState(false);
  const [flywheelTraining, setFlywheelTraining] = useState(false);
  const [suspensionTraining, setSuspension] = useState(false);
  const [weightTraining, setWeightTraining] = useState(false);
  const [catCow, setCatCow] = useState(false);
  const [airPlane, setAirPlane] = useState(false);
  const [fallenTriangle, setFallenTriangle] = useState(false);
  const [lizardPose, setLizardPose] = useState(false);
  const [wideFold, setWideFold] = useState(false);
  const [lowLungeTwist, setlowLungeTwist] = useState(false);
  const [seatedForwardFold, setseatedForwardFold] = useState(false);
  const [figureFour, setfigureFour] = useState(false);
  const [puppyPose, setpuppyPose] = useState(false);
  const [interlacedForwardFold, setinterlacedForwardFold] = useState(false);
  const [wideStraddle, setWideStraddle] = useState(false);
  const [sideBends, setSideBends] = useState(false);
  const [shoulderRolls, setShoulderRolls] = useState(false);
  const [headRolls, setHeadRolls] = useState(false);
  const [figure, setFigure] = useState(false);
  const [forearmStretch, setForearmStretch] = useState(false);
  const [wideSquat, setWideSquat] = useState(false);
  const [workoutCard, setWorkoutCard] = useState(false);

  function handleSwitch() {
    setWorkOutPage(!workoutPage);
  }

  function handleShare() {
    setWorkoutCard(!workoutCard);
  }

  function handleNewWorkout() {
    setWorkOutPage(!workoutPage);
    setallWorkouts([...allWorkouts, newExercise]);
    console.log(newExercise.name);
    const workout = {
      start_date: newExercise.start,
      end_date: newExercise.end,
      user_id: user.id,
    };
    fetch("/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: { "Content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((workout) => setUserWorkouts(workout));

    const exercise = {
      total_time: newExercise.total_time,
      name: newExercise.name,
      title: newExercise.title,
      workout_id: user.id,
    };

    fetch("/exercises", {
      method: "POST",
      body: JSON.stringify(exercise),
      headers: { "Content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((exercise) => setUserExercises(exercise));
  }

  function handleOnChange(value) {
    if (newName.includes(value)) {
      setNewName(newName.filter((v) => v !== value));
    } else {
      setNewName((newName) => [...newName, value]);
    }
    setNewExercise({ ...newExercise, name: newName });
  }

  return (
    <>
      {workoutCard && (
        <WorkoutCard
          setWorkoutCard={setWorkoutCard}
          workoutCard={workoutCard}
          user={user}
          newExercise={newExercise}
          setPosts={setPosts}
          mainCalendar={mainCalendar}
        />
      )}
      <div className="workoutCard">
        <button className="calendarButton" onClick={handleSwitch}>
          Back to Calendar
        </button>

        <div className="exerciseTypeDiv">
          <b>Start</b>
          <DatePicker
            placeholderText="Start Date"
            style={{ marginRight: "10px" }}
            selected={newExercise.start}
            onChange={(start) => setNewExercise({ ...newExercise, start })}
          />
          <b>End</b>
          <DatePicker
            placeholderText="End Date"
            style={{ marginRight: "10px" }}
            selected={newExercise.end}
            onChange={(end) => setNewExercise({ ...newExercise, end })}
          />
        </div>
        <div>
          <button onClick={handleNewWorkout} className="button">
            Add to Calendar
          </button>
          <button className="button" onClick={handleShare}>
            Share
          </button>
        </div>
        <div className="aerobicDiv">
          <label>
            <b>Aerobic exercise</b>
          </label>
          <input
            type="radio"
            id="Aerobic exercise"
            name="Classification"
            value="Aerobic exercise"
            onChange={(e) =>
              setNewExercise({ ...newExercise, title: e.target.value })
            }
          />
          <hr></hr>
          <label>Jump Rope</label>
          <input
            type="radio"
            id="Jump Rope"
            name="Jump Rope"
            value="Jump Rope"
            checked={jumpRope}
            onClick={(e) => {
              handleOnChange(e.target.value);
              setJumpRope(!jumpRope);
            }}
          />
          <label>Jumping Jacks</label>
          <input
            type="radio"
            id="Jumping Jacks"
            name="Jumping Jacks"
            value="Jumping Jacks"
            checked={jumpingJacks}
            onClick={(e) => {
              setjumpingJacks(!jumpingJacks);
              handleOnChange(e.target.value);
            }}
          />
          <label>Stair Training</label>
          <input
            type="radio"
            id="Stair Training"
            name="Stair Training"
            value="Stair Training"
            checked={stairTraining}
            onClick={(e) => {
              setStairTraining(!stairTraining);
              handleOnChange(e.target.value);
            }}
          />
          <label>Butt Kicks</label>
          <input
            type="radio"
            id="Butt Kicks"
            name="Butt Kicks"
            value="Butt Kicks"
            checked={buttKicks}
            onClick={(e) => {
              setButtKicks(!buttKicks);
              handleOnChange(e.target.value);
            }}
          />
          <label>Mountain Climber</label>
          <input
            type="radio"
            id="Mountain Climber"
            name="Mountain Climber"
            value="Mountain Climber"
            checked={mountainClimber}
            onClick={(e) => {
              setMountainClimber(!mountainClimber);
              handleOnChange(e.target.value);
            }}
          />
          <label>Bear Crawls</label>
          <input
            type="radio"
            id="Bear Crawls"
            name="Bear Crawls"
            value="Bear Crawls"
            checked={bearCrawls}
            onClick={(e) => {
              setBearCrawls(!bearCrawls);
              handleOnChange(e.target.value);
            }}
          />
          <label>Burpees</label>
          <input
            type="radio"
            id="Burpees"
            name="Burpees"
            value="Burpees"
            checked={burpees}
            onClick={(e) => {
              setBurpees(!burpees);
              handleOnChange(e.target.value);
            }}
          />
          <label>Squat Jacks</label>
          <input
            type="radio"
            id="Squat Jacks"
            name="Squat Jacks"
            value="Squat Jacks"
            checked={squatJacks}
            onClick={(e) => {
              setSquatJacks(!squatJacks);
              handleOnChange(e.target.value);
            }}
          />
          <label>Inchworm</label>
          <input
            type="radio"
            id="Inchworm"
            name="Inchworm"
            value="Inchworm"
            checked={inchworm}
            onClick={(e) => {
              setInchworm(!inchworm);
              handleOnChange(e.target.value);
            }}
          />
          <label>High Knees</label>
          <input
            type="radio"
            id="High Knees"
            name="High Knees"
            value="High Knees"
            checked={highKnees}
            onClick={(e) => {
              setHighKnees(!highKnees);
              handleOnChange(e.target.value);
            }}
          />
          <label>Donkey Kicks</label>
          <input
            type="radio"
            id="Donkey Kicks"
            name="Donkey Kicks"
            value="Donkey Kicks"
            checked={donkeyKicks}
            onClick={(e) => {
              setDonkeyKicks(!donkeyKicks);
              handleOnChange(e.target.value);
            }}
          />
          <label>Corkscrew</label>
          <input
            type="radio"
            id="Corkscrew"
            name="Corkscrew"
            value="Corkscrew"
            checked={corkscrew}
            onClick={(e) => {
              setCorkscrew(!corkscrew);
              handleOnChange(e.target.value);
            }}
          />
          <label>Flutter Kicks</label>
          <input
            type="radio"
            id="Flutter Kicks"
            name="Flutter Kicks"
            value="Flutter Kicks"
            checked={flutterKicks}
            onClick={(e) => {
              setFlutterKicks(!flutterKicks);
              handleOnChange(e.target.value);
            }}
          />
          <label>Skaters</label>
          <input
            type="radio"
            id="Skaters"
            name="Skaters"
            value="Skaters"
            checked={skaters}
            onClick={(e) => {
              setSkaters(!skaters);
              handleOnChange(e.target.value);
            }}
          />
          <label>Plank Jacks</label>
          <input
            type="radio"
            id="Plank Jacks"
            name="Plank Jacks"
            value="Plank Jacks"
            checked={plankJacks}
            onClick={(e) => {
              setPlankJacks(!plankJacks);
              handleOnChange(e.target.value);
            }}
          />
          <label>Box Jumps</label>
          <input
            type="radio"
            id="Box Jumps"
            name="Box Jumps"
            value="Box Jumps"
            checked={boxJumps}
            onClick={(e) => {
              setBoxJumps(!boxJumps);
              handleOnChange(e.target.value);
            }}
          />
          <label>Jumping Lunges</label>
          <input
            type="radio"
            id="Jumping Lunges"
            name="Jumping Lunges"
            value="Jumping Lunges"
            checked={jumpingLunges}
            onClick={(e) => {
              setJumpingLunges(!jumpingLunges);
              handleOnChange(e.target.value);
            }}
          />
          <label>Jump Forward Jogs</label>
          <input
            type="radio"
            id="Jump Forward Jogs"
            name="Jump Forward Jogs"
            value="Jump Forward Jogs"
            checked={jumpForwardJogs}
            onClick={(e) => {
              setJumpForwardJogs(!jumpForwardJogs);
              handleOnChange(e.target.value);
            }}
          />
          <label>Sprinter Sit-ups</label>
          <input
            type="radio"
            id="Sprinter Sit-ups"
            name="Sprinter Sit-ups"
            value="Sprinter Sit-ups"
            checked={sprinterSitups}
            onClick={(e) => {
              setSprinterSitups(!sprinterSitups);
              handleOnChange(e.target.value);
            }}
          />
          <label>Skipping</label>
          <input
            type="radio"
            id="Skipping"
            name="Skipping"
            value="Skipping"
            checked={skipping}
            onClick={(e) => {
              setSkipping(!skipping);
              handleOnChange(e.target.value);
            }}
          />
        </div>
        <hr></hr>
        <div className="anaerobicDiv">
          <label>
            <b>Anaerobic exercise</b>
          </label>
          <input
            type="radio"
            id="Anaerobic exercise"
            name="Classification"
            value="Anaerobic exercise"
            onChange={(e) =>
              setNewExercise({ ...newExercise, title: e.target.value })
            }
          />
          <hr></hr>
          <label>High-intensity interval training</label>
          <input
            type="radio"
            id="High-intensity interval training"
            name="High-intensity interval training"
            value="High-intensity interval training"
            checked={high}
            onClick={(e) => {
              setHigh(!high);
              handleOnChange(e.target.value);
            }}
          />
          <label>Sprinting</label>
          <input
            type="radio"
            id="Sprinting"
            name="Sprinting"
            value="Sprinting"
            checked={sprinting}
            onClick={(e) => {
              setSprinting(!sprinting);
              handleOnChange(e.target.value);
            }}
          />
          <label>Strength training</label>
          <input
            type="radio"
            id="Strength training"
            name="Strength training"
            value="Strength training"
            checked={strengthTraining}
            onClick={(e) => {
              setStrengthTraining(!strengthTraining);
              handleOnChange(e.target.value);
            }}
          />
          <label>Bodyweight exercise</label>
          <input
            type="radio"
            id="Bodyweight exercise"
            name="Bodyweight exercise"
            value="Bodyweight exercise"
            checked={bodyWeightExercise}
            onClick={(e) => {
              setBodyWeight(!bodyWeightExercise);
              handleOnChange(e.target.value);
            }}
          />
          <label>Flywheel training</label>
          <input
            type="radio"
            id="Flywheel training"
            name="Flywheel training"
            value="Flywheel training"
            checked={flywheelTraining}
            onClick={(e) => {
              setFlywheelTraining(!flywheelTraining);
              handleOnChange(e.target.value);
            }}
          />
          <label>Suspension training</label>
          <input
            type="radio"
            id="Suspension training"
            name="Suspension training"
            value="Suspension training"
            checked={suspensionTraining}
            onClick={(e) => {
              setSuspension(!suspensionTraining);
              handleOnChange(e.target.value);
            }}
          />
          <label>Weight training</label>
          <input
            type="radio"
            id="Weight training"
            name="Weight training"
            value="Weight training"
            checked={weightTraining}
            onClick={(e) => {
              setWeightTraining(!weightTraining);
              handleOnChange(e.target.value);
            }}
          />
        </div>
        <hr></hr>
        <div className="flexibilityDiv">
          <label>
            <b>Flexibility exercise</b>
          </label>
          <input
            type="radio"
            id="Flexibility exercise"
            name="Classification"
            value="Flexibility exercise"
            onChange={(e) =>
              setNewExercise({ ...newExercise, title: e.target.value })
            }
          />
          <hr></hr>
          <label>Cat-Cow</label>
          <input
            type="radio"
            id="Cat-Cow"
            name="Cat-Cow"
            value="Cat-Cow"
            checked={catCow}
            onClick={(e) => {
              setCatCow(!catCow);
              handleOnChange(e.target.value);
            }}
          />
          <label>Airplane</label>
          <input
            type="radio"
            id="Airplane"
            name="Airplane"
            value="Airplane"
            checked={airPlane}
            onClick={(e) => {
              setAirPlane(!airPlane);
              handleOnChange(e.target.value);
            }}
          />
          <label>Fallen Triangle</label>
          <input
            type="radio"
            id="Fallen Triangle"
            name="Fallen Triangle"
            value="Fallen Triangle"
            checked={fallenTriangle}
            onClick={(e) => {
              setFallenTriangle(!fallenTriangle);
              handleOnChange(e.target.value);
            }}
          />
          <label>Lizard Pose</label>
          <input
            type="radio"
            id="Lizard Pose"
            name="Lizard Pose"
            value="Lizard Pose"
            checked={lizardPose}
            onClick={(e) => {
              setLizardPose(!lizardPose);
              handleOnChange(e.target.value);
            }}
          />
          <label>Wide Fold</label>
          <input
            type="radio"
            id="Wide Fold"
            name="Wide Fold"
            value="Wide Fold"
            checked={wideFold}
            onClick={(e) => {
              setWideFold(!wideFold);
              handleOnChange(e.target.value);
            }}
          />
          <label>Low Lunge Twist</label>
          <input
            type="radio"
            id="Low Lunge Twist"
            name="Low Lunge Twist"
            value="Low Lunge Twist"
            checked={lowLungeTwist}
            onClick={(e) => {
              setlowLungeTwist(!lowLungeTwist);
              handleOnChange(e.target.value);
            }}
          />
          <label>Seated Forward Fold</label>
          <input
            type="radio"
            id="Seated Forward Fold"
            name="Seated Forward Fold"
            value="Seated Forward Fold"
            checked={seatedForwardFold}
            onClick={(e) => {
              setseatedForwardFold(!seatedForwardFold);
              handleOnChange(e.target.value);
            }}
          />
          <label>Figure Four</label>
          <input
            type="radio"
            id="Figure Four"
            name="Figure Four"
            value="Figure Four"
            checked={figureFour}
            onClick={(e) => {
              setfigureFour(!figureFour);
              handleOnChange(e.target.value);
            }}
          />
          <label>Puppy Pose</label>
          <input
            type="radio"
            id="Puppy Pose"
            name="Puppy Pose"
            value="Puppy Pose"
            checked={puppyPose}
            onClick={(e) => {
              setpuppyPose(!puppyPose);
              handleOnChange(e.target.value);
            }}
          />
          <label>Interlaced Forward Fold</label>
          <input
            type="radio"
            id="Interlaced Forward Fold"
            name="Interlaced Forward Fold"
            value="Interlaced Forward Fold"
            checked={interlacedForwardFold}
            onClick={(e) => {
              setinterlacedForwardFold(!interlacedForwardFold);
              handleOnChange(e.target.value);
            }}
          />
          <label>Wide Straddle</label>
          <input
            type="radio"
            id="Wide Straddle"
            name="Wide Straddle"
            value="Wide Straddle"
            checked={wideStraddle}
            onClick={(e) => {
              setWideStraddle(!wideStraddle);
              handleOnChange(e.target.value);
            }}
          />
          <label>Side Bends</label>
          <input
            type="radio"
            id="Side Bends"
            name="Side Bends"
            value="Side Bends"
            checked={sideBends}
            onClick={(e) => {
              setSideBends(!sideBends);
              handleOnChange(e.target.value);
            }}
          />
          <label>Shoulder Rolls</label>
          <input
            type="radio"
            id="Shoulder Rolls"
            name="Shoulder Rolls"
            value="Shoulder Rolls"
            checked={shoulderRolls}
            onClick={(e) => {
              setShoulderRolls(!shoulderRolls);
              handleOnChange(e.target.value);
            }}
          />
          <label>Head Rolls</label>
          <input
            type="radio"
            id="Head Rolls"
            name="Head Rolls"
            value="Head Rolls"
            checked={headRolls}
            onClick={(e) => {
              setHeadRolls(!headRolls);
              handleOnChange(e.target.value);
            }}
          />
          <label>Figure-8s</label>
          <input
            type="radio"
            id="Figure-8s"
            name="Figure-8s"
            value="Figure-8s"
            checked={figure}
            onClick={(e) => {
              setFigure(!figure);
              handleOnChange(e.target.value);
            }}
          />
          <label>Forearm Stretch</label>
          <input
            type="radio"
            id="Forearm Stretch"
            name="Forearm Stretch"
            value="Forearm Stretch"
            checked={forearmStretch}
            onClick={(e) => {
              setForearmStretch(!forearmStretch);
              handleOnChange(e.target.value);
            }}
          />
          <label>Wide Squat With Twists</label>
          <input
            type="radio"
            id="Wide Squat With Twists"
            name="Wide Squat With Twists"
            value="Wide Squat With Twists"
            checked={wideSquat}
            onClick={(e) => {
              setWideSquat(!wideSquat);
              handleOnChange(e.target.value);
            }}
          />
        </div>

        <div className="timeDiv">
          <input
            type="number"
            id="Exercise Length"
            name="Total Time"
            value={newExercise.total_time}
            min="0"
            max="5"
            onChange={(e) =>
              setNewExercise({ ...newExercise, total_time: e.target.value })
            }
          />
          <b>Allot Time</b>
        </div>
      </div>
    </>
  );
}

export default NewWorkout;
