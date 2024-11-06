import {
  createBrowserRouter,
} from "react-router-dom";
import App from "./App";
import AboutPage from "./ui/pages/AboutPage";
import ProgramPage from "./ui/pages/ProgramPage";
import ProjectsPage from "./ui/pages/ProjectPage";
import TeamPage from "./ui/pages/TeamsPage";
import EventsPage from "./ui/pages/EventPage";
import ContactPage from "./ui/pages/ContactPage";
export const routerLinks = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/programs",
    element: <ProgramPage />
  },
  {
    path: "/projects",
    element: <ProjectsPage />
  }, {
    path: "/team",
    element: <TeamPage />
  }, {
    path: "/events",
    element: <EventsPage />
  },
  {
    path: "/contact",
    element: <ContactPage />
  }
]);