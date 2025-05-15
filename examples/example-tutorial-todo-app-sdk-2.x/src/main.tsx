import { OsdkProvider } from "@osdk/react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthCallback from "./AuthCallback";
import Home from "./Home";
import "./index.css";
import { StrictMode } from "react";
import client from "./client";

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
  <StrictMode>
    <OsdkProvider client={client}>
      <RouterProvider router={router} />,
    </OsdkProvider>
  </StrictMode>,
);
