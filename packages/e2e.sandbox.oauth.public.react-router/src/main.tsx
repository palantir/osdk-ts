import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthCallback from "./AuthCallback.js";
import AuthenticatedRoute from "./AuthenticatedRoute.js";
import Home from "./Home.js";
import Login from "./Login.js";
import "./index.css";
import React from "react";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <AuthenticatedRoute />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
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
