import { Outlet } from "react-router";
import Sidebar from "./components/sidebar/Sidebar";

const App = () => {
  return (
    <div className="flex h-screen bg-zinc-50">
      <Sidebar />
      <div className=" overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
