import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AuthCallback from "./AuthCallback";
import AuthenticatedRoute from "./AuthenticatedRoute";
import Home from "./Home";
import Login from "./Login";

import "./index.css";

const router = createBrowserRouter(
  [
    {
      children: [
        {
          element: <Home />,
          path: "/",
        },
      ],
      element: <AuthenticatedRoute />,
      path: "/",
    },
    {
      element: <Login />,
      path: "/login",
    },
    {
      element: <AuthCallback />,
      // This is the route defined in your application's redirect URL
      path: "/auth/callback",
    },
  ],
  { basename: import.meta.env.BASE_URL }
);

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <RouterProvider router={router} />
);
