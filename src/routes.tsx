import { createBrowserRouter, Navigate } from "react-router";
import App from "./App";
import Overview from "./pages/Overview";
import Exercises from "./pages/Exercises";
import NotFound from "./pages/NotFound";
import MuscleGroup from "./pages/MuscleGroup";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, element: <Navigate to={"overview"} replace /> },
      { path: "overview", Component: Overview },
      { path: "muscle-group", Component: MuscleGroup },
      { path: "exercises", Component: Exercises },
    ],
  },
  { path: "*", Component: NotFound },
]);

export default router;
