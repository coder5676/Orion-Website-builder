import { createBrowserRouter } from "react-router-dom";
import Home from "./home";

import App from "./App";
import Canvaspart from "./canvas";
import Profile from "./components/profile";
import Feedback from "./components/feedback";
import Library from "./components/library";
import Land from "./landingpage";
import Watch from "./watch";


export const router = createBrowserRouter([
  {
    path: "/", // Landing page
    element: <Land />,
  },
  {
    path: "/app", // Your app's main layout with sidebar
    element: <App />,
    children: [
      { index: true, element: <Home /> },

      {
        path: "canvas", // ✅ for /home/canvas?id=...&mode=...
        element: <Canvaspart />,
      },
      {
        path: "canvas/:canid/watch", // for /home/canvas/abc123/watch
        element: <Watch />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "feedback",
        element: <Feedback />,
      },
      {
        path: "library",
        element: <Library />,
      },
    ],
  },
]);
