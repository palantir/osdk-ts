import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PeopleApp from "./App.js";
import { EmployeesPage } from "./pages/EmployeesPage.js";
import { OfficesPage } from "./pages/OfficesPage.js";

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
