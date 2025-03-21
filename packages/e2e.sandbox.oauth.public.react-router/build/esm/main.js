import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthCallback from "./AuthCallback.js";
import AuthenticatedRoute from "./AuthenticatedRoute.js";
import Home from "./Home.js";
import Login from "./Login.js";
import "./index.css";
import React from "react";
const router = createBrowserRouter([{
  path: "/",
  element: /*#__PURE__*/React.createElement(AuthenticatedRoute, null),
  children: [{
    path: "/",
    element: /*#__PURE__*/React.createElement(Home, null)
  }]
}, {
  path: "/login",
  element: /*#__PURE__*/React.createElement(Login, null)
}, {
  // This is the route defined in your application's redirect URL
  path: "/auth/callback",
  element: /*#__PURE__*/React.createElement(AuthCallback, null)
}], {
  basename: import.meta.env.BASE_URL
});
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(RouterProvider, {
  router: router
}));
//# sourceMappingURL=main.js.map