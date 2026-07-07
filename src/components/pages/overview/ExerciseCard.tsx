import { Link } from "react-router";
import Card from "../../ui/Card";
import ExercisesData from "../../../data/muscula_exercises.json";
import Chest from "../../../assets/front.png";

const ExerciseCard = () => {
  console.log(ExercisesData);
  return (
    <div className="bg-white shadow border border-zinc-200 rounded-md w-100 p-4 space-y-4">
      <div className="flex justify-between">
        <p>Explore Muscle Groups</p>
        <Link to={"/exercises"} className="text-primary font-semibold">
          View All
        </Link>
      </div>
      <div className="flex overflow-x-auto">
        <div className="flex gap-2">
          <Card
            image={Chest}
            title="Chest"
            description={`${ExercisesData.filter(
              (e) => e.category === "Chest",
            ).length.toString()} exercises`}
          />
          <Card
            image={Chest}
            title="Biceps"
            description={`${ExercisesData.filter((e) => e.category === "Biceps").length.toString()} exercises`}
          />
          <Card
            image={Chest}
            title="Triceps"
            description={`${ExercisesData.filter((e) => e.category === "Triceps").length.toString()} exercises`}
          />
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;
