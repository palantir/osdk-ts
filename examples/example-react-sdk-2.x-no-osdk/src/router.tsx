import AuthCallback from "@/AuthCallback";
import Home from "@/Home";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter(
  [
    {
      element: <Home />,
      path: "/",
    },
    {
      // This is the route defined in your application's redirect URL
      element: <AuthCallback />,
      path: "/auth/callback",
    },
  ],
  { basename: import.meta.env.BASE_URL },
);
