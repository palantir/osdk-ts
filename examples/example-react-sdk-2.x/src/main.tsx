import { OsdkProvider } from "@osdk/react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./router";
import client from "./client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <OsdkProvider client={client}>
    <RouterProvider router={router} />,
  </OsdkProvider>,
);
