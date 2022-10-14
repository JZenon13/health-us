import React, { useState } from "react";
import "./rightbar.css";
import RandomWorkout from "./RandomWorkout";

function Rightbar() {
  const [showRandom, setShowRandom] = useState(false);
  const randomExercise = [
    {
      Title: "Tabata",
      Description:
        "Do eight rounds of high-intensity intervals, alternating 20 seconds effort with 10 seconds rest. A fat-eviscerating finisher. If you’d like to find out who’s responsible for such a punishing protocol, our guide to Tabata training reveals all.",
    },
    {
      Title: "Mary",
      Description:
        "With this workout you’re aiming to complete as many rounds of the three exercises as possible in 20 minutes. The reps per exercise are relatively low compared with some of the monster sets tackled in CrossFit, but it won’t feel that way when you’re getting ready to tackle your fifth or sixth round of handstand press-ups. And just a note on those handstand press-ups: do them with your feet against a wall – you don’t have to master a free-standing handstand first. Start with five handstand press-ups, then do ten single-leg squats, alternating legs, and finish with 15 pull-ups.",
    },
    {
      Title: "Angie",
      Description:
        "Doing 100 reps of anything is tough – so doing 100 reps of four different exercises in a row, trying to complete the whole lot as quickly as possible, is absolute murder. Those four exercises are pull-ups, press-ups, sit-ups and squats. So you’ll be doing 100 pull-ups, 100 press-ups, 100 sit-ups and 100 squats. Or, if you’re anything like us, eight pull-ups then call it a day.",
    },
    {
      Title: "Home Chipper",
      Description: `The beauty of a descending ladder workout is that it gets easier over time. Unfortunately, CrossFit doesn’t have the word “easy” in its vocabulary, so with this descending ladder workout you start with 100 reps of the first exercise, and then it’s 90 for the second, so you’re 190 reps deep with EIGHT exercises still to go. Anyway, here are those exercises, all of which can be done without any equipment. 100 squats
      90 sit-ups
      80 alternating lunges
      70 burpees
      60-second plank
      50 mountain climbers
      40 press-ups
      30 hollow rocks
      20 jump squats
      10 hand-release press-ups (chest to floor, raise your hands briefly off the floor, then push back up)`,
    },
    {
      Title: "Fran",
      Description:
        "A CrossFit classic, Fran is a great workout to revisit periodically in the hope that you will improve your time as you get fitter. Fran consists of just two exercises – thrusters (recommended weight 95lb/40-45kg) and pull-ups. You do 21 reps of each, then 15 reps, then nine, as fast as you can. Finishing in under six minutes deserves a pat on the back – don’t attempt this yourself because you may start to panic when you realise you can’t raise your arms.",
    },
    {
      Title: "Karen",
      Description:
        "Even simpler than Fran, there’s only one exercise in the Karen WOD. Unfortunately that exercise is wall balls, and you’ll be doing 150 of them as fast as you can. Grab a 20lb/9kg medicine ball and face your wall. Aim to throw it above the 10ft mark (which you’ll find in most CrossFit gyms) with each rep. Anything under ten minutes would be a great effort first time out. As with all CrossFit workouts, take as many breaks as you need – just remember that they count towards your overall time.",
    },
    {
      Title: "Helen",
      Description:
        "The Helen WOD is a combination of cardio and strength work. Start with a 400m run, then do 21 kettlebell swings (weight 53lb/24kg) and finish with 12 pull-ups. Then do it again, and then again. Three rounds in total. Finishing all three rounds in under 12 minutes is a solid effort.",
    },
    {
      Title: "Eva",
      Description:
        "If you thought the Helen workout sounded hard, you might as well skip even reading this one. Eva takes the same exercises as Helen but ramps up the distance, weight and reps to create an absolutely brutal circuit. For starters you’re doing five rounds, instead of three. Those rounds involve an 800m run, 30 kettlebell swings (weight 70lb/31-32kg) and 30 pull-ups. In theory you’re doing this all as fast as possible but it’s fair to say if you complete this one at all, you’ve done yourself proud.",
    },
    {
      Title: "Murph",
      Description:
        "Clear your schedule, this one will take some time. The five steps in the Murph WOD are as follows: one-mile run, 100 pull-ups, 200 press-ups, 300 air squats, one-mile run. This one is definitely a marathon, not a sprint. Murph is what’s known as a Hero WOD, named in honour of Lt Michael P Murphy, a Navy SEAL killed in action in 2005.",
    },
    {
      Title: "Cindy",
      Description:
        "Rather than aiming to complete the required reps as quickly as possible, the Cindy WOD always lasts exactly 20 minutes. In those 20 minutes you do repeated circuits of five pull-ups, ten press-ups and 15 air squats. Over and over again. Hit 15 rounds and we’ll give you a round of applause – 20 gets you a standing O.",
    },
  ];
  function handleRandomWorkout() {
    setShowRandom(!showRandom);
  }

  let randomWOD =
    randomExercise[Math.floor(Math.random() * randomExercise.length)];

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="/images/skeleton.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Workouts</b>
          </span>
        </div>
        <h4 className="rightbarTitle">Generate Random Workout ⏬</h4>
        <button className="hereButton" onClick={handleRandomWorkout}>
          {showRandom ? "Again" : "Here"}
        </button>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            {showRandom ? <RandomWorkout randomWOD={randomWOD} /> : null}
            <div className="rightbarProjectImgContainer"></div>
            <span className="rightbarUsername"></span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Rightbar;
