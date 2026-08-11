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

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <StrictMode>
    <OsdkProvider client={client}>
      <RouterProvider router={router} />
    </OsdkProvider>
  </StrictMode>,
);
