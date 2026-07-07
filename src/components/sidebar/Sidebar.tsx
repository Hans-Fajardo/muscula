import { NavLink } from "react-router";
import Logo from "../ui/Logo";

const Sidebar = () => {
  return (
    <div className="h-full bg-zinc-900 text-white flex flex-col p-2">
      <header>
        <Logo withText={true} />
      </header>

      <NavLink
        to={"overview"}
        className={({ isActive }) => (isActive ? "text-red-400" : "")}
      >
        Overview
      </NavLink>
      <NavLink
        to={"muscle-group"}
        className={({ isActive }) => (isActive ? "text-red-400" : "")}
      >
        Muscle Group
      </NavLink>
      <NavLink
        to={"exercises"}
        className={({ isActive }) => (isActive ? "text-red-400" : "")}
      >
        Exercises
      </NavLink>
    </div>
  );
};

export default Sidebar;
