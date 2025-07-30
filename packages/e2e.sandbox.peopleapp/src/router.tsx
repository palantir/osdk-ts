import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PeopleApp from "./App.js";
import { EmployeesPage } from "./app/employees/page.js";
import { OfficesPage } from "./app/offices/page.js";

const router = createBrowserRouter([
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
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
