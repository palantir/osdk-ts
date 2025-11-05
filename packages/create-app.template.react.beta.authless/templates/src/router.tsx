import { createBrowserRouter } from "react-router-dom";
{{#unless isAuthless}}
import AuthCallback from "./AuthCallback";
{{/unless}}
import Home from "./Home";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {{#unless isAuthless}}
    {
      path: "/auth/callback",
      element: <AuthCallback />,
    },
    {{/unless}}
  ],
  { basename: import.meta.env.BASE_URL },
);
