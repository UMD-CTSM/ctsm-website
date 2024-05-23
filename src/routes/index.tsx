import { Navigate, createBrowserRouter } from "react-router-dom";

import LandingPage from "../homePage/LandingPage";
import Page from "./Page";
import PageNotFound from "./PageNotFound";
import People from "../people/PeoplePage";
import PersonPage, { personLoader } from "../people/PersonPage";
import ProjectsPage from "../projects/ProjectsPage";
import ProjectPage, {projectLoader} from "../projects/ProjectPage";
import PublicationPage from "../publications/PublicationPage";
import ContactUs from "./ContactUs";
import ToolsPage from "../tools/ToolsPage";
import ArchivedPapers from "../publications/ArchivedPapers";


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
      },
      {
        path: "publications",
        element: <PublicationPage/>
      },
      {
        path: "archive",
        element: <ArchivedPapers/>
      },
      {
        path: 'climate',
        element: <Navigate to="/research/climate" replace/>
      },
      {
        path: 'tools',
        element: <ToolsPage/>
      },
      {
        path: 'contact',
        element: <ContactUs/>
      }
    ]
  },
  // {
  //   path: "/icn",
  //   element: <LandingPage/>
  // },
]);