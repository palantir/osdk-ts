import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PeopleApp from "./App.js";
import { ActionFormPage } from "./app/action-form/page.js";
import { AuthCallbackPage } from "./app/auth/callback/page.js";
import { EmployeesPage } from "./app/employees/page.js";
import { OfficesPage } from "./app/offices/page.js";

const router = createBrowserRouter([
  // Auth callback route - outside of the main app layout
  {
    path: "/auth/callback",
    element: <AuthCallbackPage />,
  },
  // Main app routes
  {
    path: "/",
    element: <PeopleApp />,
    children: [
      {
        path: "/",
        element: <EmployeesPage />,
      },
      {
        path: "/employees",
        element: <EmployeesPage />,
      },
      {
        path: "/offices",
        element: <OfficesPage />,
      },
      {
        path: "/action-form",
        element: <ActionFormPage />,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
