import Home from "@/Home";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
  ],
  { basename: import.meta.env.BASE_URL },
);
