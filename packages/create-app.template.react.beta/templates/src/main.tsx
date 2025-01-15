import { OsdkProvider } from "@osdk/react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import createClientAndAuth from "./createClientAndAuth";
import "./index.css";
import { router } from "./router";

const { client, auth } = createClientAndAuth();
export { auth };

ReactDOM.createRoot(document.getElementById("root")!).render(
  <OsdkProvider client={client}>
    <RouterProvider router={router} />,
  </OsdkProvider>,
);
