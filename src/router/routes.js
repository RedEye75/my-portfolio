import { createBrowserRouter } from "react-router-dom";
import Contact from "../components/Contact";
import Home from "../components/Home";
import MyProject from "../components/MyProject";
import Skill from "../components/Skill";
import Main from "../Layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/skill",
        element: <Skill />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "project",
        element: <MyProject />,
      },
    ],
  },
]);
export default router;
