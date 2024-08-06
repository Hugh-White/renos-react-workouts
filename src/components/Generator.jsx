import { useState } from "react";
import { SCHEMES, WORKOUTS } from "../utils/swoldier";
import SectionWrapper from "./SectionWrapper";
import Button from "./Button";

function Header(props) {
  const { index, title, description } = props;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center gap-2">
        <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-violet-400 drop-shadow-glow">
          {index}
        </p>
        <h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
      </div>
      <p className="text-sm sm:text-base mx-auto">{description}</p>
    </div>
  );
}

export default function Generator(props) {
  const {
    splitGroups,
    setSplitGroups,
    muscles,
    setMuscles,
    goal,
    setGoal,
    updateWorkout,
  } = props;
  const [showModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal(!showModal);
  }

  function updateMuscles(muscleGroup) {
    if (muscles.includes(muscleGroup)) {
      setMuscles(muscles.filter((val) => val !== muscleGroup));
      return;
    }

    if (muscles.length > 2) {
      return;
    }

    if (splitGroups !== "individual") {
      setMuscles([muscleGroup]);
      setShowModal(false);
      return;
    }

    setMuscles([...muscles, muscleGroup]);
    if (muscles.length === 2) {
      setShowModal(false);
    }
  }

  return (
    <SectionWrapper
      id={"generate"}
      header={"generate your workout"}
      title={["It's", "Time", "To", "Grind"]}
    >
      <Header
        index={"01"}
        title={"Choose your split"}
        description={"Select your training split below."}
      />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <button
              onClick={() => {
                setMuscles([]);
                setSplitGroups(type);
              }}
              className={
                "bg-slate-950 border  py-3 duration-200 hover:drop-shadow-glow rounded-lg px-4" +
                (type === splitGroups
                  ? "border-violet-600 drop-shadow-glow rounded-lg"
                  : "border-violet-400 rounded-lg")
              }
              key={typeIndex}
            >
              <p className="capitalize">{type.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>
      <Header
        index={"02"}
        title={"Target Muscle Groups"}
        description={
          "Choose which muscle groups you want to hit (based on selected split)."
        }
      />
      <div className="bg-slate-950 border border-solid border-violet400 rounded-lg flex flex-col">
        <button
          onClick={toggleModal}
          className="relative flex items-center justify-center p-3"
        >
          <p className="capitalize">
            {muscles.length == 0 ? "Select Muscle Groups" : muscles.join(" ")}
          </p>
          <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
        </button>

        {showModal && (
          <div className="flex flex-col px-3 pb-3">
            {(splitGroups === "individual"
              ? WORKOUTS[splitGroups]
              : Object.keys(WORKOUTS[splitGroups])
            ).map((muscleGroup, muscleGroupIndex) => {
              return (
                <button
                  onClick={() => {
                    updateMuscles(muscleGroup);
                  }}
                  key={muscleGroupIndex}
                  className={
                    "hover:text-violet-500 duration-200 " +
                    (muscles.includes(muscleGroup) ? "text-violet-400" : " ")
                  }
                >
                  <p className="capitalize">
                    {muscleGroup.replaceAll("_", " ")}
                  </p>
                </button>
              );
            })}
          </div>
        )}
      </div>
      <Header
        index={"03"}
        title={"Define Your Goal"}
        description={
          "Strength, Growth or Endurance. What do you want to achieve?"
        }
      />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
          return (
            <button
              onClick={() => {
                setGoal(scheme);
              }}
              className={
                "bg-slate-950 border border-violet-400 py-3 duration-200 hover:border-violet-600 hover:drop-shadow-glow rounded-lg px-4" +
                (scheme === goal
                  ? "border-violet-600 drop-shadow-glow rounded-lg"
                  : "border-violet-400 rounded-lg")
              }
              key={schemeIndex}
            >
              <p className="capitalize">{scheme.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>
      <Button
        func={updateWorkout}
        onClick={() => {
          window.location.href = "#workout";
        }}
        text={"Generate Workout"}
      />
    </SectionWrapper>
  );
}
