import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthCallback from "./AuthCallback";
import AuthenticatedRoute from "./AuthenticatedRoute";
import Home from "./Home";
import Login from "./Login";
import "./index.css";

const router = createBrowserRouter([
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
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
