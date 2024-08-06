import ExerciseCard from "./ExerciseCard";
import SectionWrapper from "./SectionWrapper";

export default function Workout(props) {
  const { workout } = props;
  return (
    //prettier-ignore
    <SectionWrapper
      id={"workout"}
      header={"let's get started!"}
      title={["Your", "PERSONAL", "Workout"]}
    >
      
      <div className="flex flex-col gap-4">
        {workout.map((exercise, i) => {
          return (
          <ExerciseCard i={i} exercise={exercise} key={i} />
        )
        })}
      </div>
    </SectionWrapper>
  );
}
