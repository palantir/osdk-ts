import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PeopleApp from "./App.js";
import { AuthCallbackPage } from "./app/auth/callback/page.js";
import { EmployeesFilterListPage } from "./app/employees/filterListPage.js";
import { EmployeesObjectViewPage } from "./app/employees/objectViewPage.js";
import { EmployeesPage } from "./app/employees/page.js";
import { FormPage } from "./app/form/page.js";
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
        path: "/employees/object-view",
        element: <EmployeesObjectViewPage />,
      },
      {
        path: "/offices",
        element: <OfficesPage />,
      },
      {
        path: "/form",
        element: <FormPage />,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
