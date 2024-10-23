import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthCallback from "./AuthCallback";
import Home from "./Home";
import "./index.css";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      // This is the route defined in your application's redirect URL
      path: "/auth/callback",
      element: <AuthCallback />,
    },
  ],
  { basename: import.meta.env.BASE_URL },
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
