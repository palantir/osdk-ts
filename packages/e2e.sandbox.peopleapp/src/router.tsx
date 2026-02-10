import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PeopleApp from "./App.js";
import { AuthCallbackPage } from "./app/auth/callback/page.js";
import { EmployeesFilterListPage } from "./app/employees/filterListPage.js";
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
        path: "/employees/filter-list",
        element: <EmployeesFilterListPage />,
      },
      {
        path: "/offices",
        element: <OfficesPage />,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
