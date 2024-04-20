import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./LandingPage";
import Page from "./Page";
import PageNotFound from "./PageNotFound";
import People from "../people/PeoplePage";
import PersonPage, { personLoader } from "../people/PersonPage";
import ProjectsPage from "../projects/ProjectsPage";
import ProjectPage, {projectLoader} from "../projects/ProjectPage";

export default createBrowserRouter([
  {
    path: "/",
    element: <Page/>,
    errorElement: <PageNotFound />,
    children: [
      {
        path: '/',
        element: <LandingPage/>,
        handle: {
          fullWidth: true,
          topMargin: false
        }
      },
      {
        path: "team",
        element: <People/>
      },
      {
        path: "team/:id",
        loader: personLoader,
        element: <PersonPage/>
      },
      {
        path: "research",
        element: <ProjectsPage/>
      },
      {
        path: "research/:id",
        loader: projectLoader,
        element: <ProjectPage/>
      }
    ]
  },
  // {
  //   path: "/icn",
  //   element: <LandingPage/>
  // },
]);