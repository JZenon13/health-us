import "./calendarPage.css";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState, useEffect } from "react";
import {
  Calendar,
  dateFnsLocalizer,
  momentLocalizer,
} from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import NewWorkout from "./NewWorkout";

const locales = { "en-US": require("date-fns/locale/en-US") };
const localizer = momentLocalizer(moment);

function CalendarPage({ user, setPosts }) {
  const [newName, setNewName] = useState([]);
  const [newExercise, setNewExercise] = useState({ title: "" });
  const [allWorkouts, setallWorkouts] = useState([]);
  const [userWorkouts, setUserWorkouts] = useState([allWorkouts]);
  const [workoutPage, setWorkOutPage] = useState(true);
  const [userExercises, setUserExercises] = useState([]);
  let mainCalendar = (
    <Calendar
      localizer={localizer}
      events={allWorkouts}
      style={{ height: 500, margin: "50px" }}
    />
  );
  function handleMakeWorkout() {
    setWorkOutPage(!workoutPage);
  }

  useEffect(() => {
    fetch(`/workouts/${user.id}`)
      .then((r) => r.json())
      .then((data) => setUserWorkouts(data));
  }, [allWorkouts]);

  useEffect(() => {
    fetch("/exercises")
      .then((r) => r.json())
      .then((data) => setUserExercises(data));
  }, []);
  return (
    <>
      {workoutPage ? (
        <div className="App">
          <div className="thecard">
            <div className="thefront">
              <h1>Workout Calendar</h1>
              <div>
                <button className="workOutButton" onClick={handleMakeWorkout}>
                  Make Workout
                </button>
              </div>
              {mainCalendar}
            </div>
          </div>
        </div>
      ) : (
        <>
          <NewWorkout
            workoutPage={workoutPage}
            setWorkOutPage={setWorkOutPage}
            setNewExercise={setNewExercise}
            newExercise={newExercise}
            newName={newName}
            setNewName={setNewName}
            allWorkouts={allWorkouts}
            setallWorkouts={setallWorkouts}
            user={user}
            setUserWorkouts={setUserWorkouts}
            setUserExercises={setUserExercises}
            setPosts={setPosts}
            mainCalendar={mainCalendar}
          />
        </>
      )}
    </>
  );
}

export default CalendarPage;
