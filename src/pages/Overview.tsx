import MuscleHeatMap from "../components/pages/overview/MuscleHeatMap";
import ExerciseCard from "../components/pages/overview/ExerciseCard";
import MuscleGroupCard from "../components/pages/overview/MuscleGroupCard";

const Overview = () => {
  return (
    <>
      <MuscleHeatMap />
      <MuscleGroupCard />
      <ExerciseCard />
    </>
  );
};

export default Overview;
