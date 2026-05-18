import { createBrowserRouter } from "react-router-dom";
import { App } from "./App.js";
import { AirlinesPage } from "./pages/AirlinesPage.js";
import { FlightDetailPage } from "./pages/FlightDetailPage.js";
import { FlightsPage } from "./pages/FlightsPage.js";
import { InterfacesPage } from "./pages/InterfacesPage.js";
import { ScheduleFlightPage } from "./pages/ScheduleFlightPage.js";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <FlightsPage /> },
      { path: "flights/:flightNumber", element: <FlightDetailPage /> },
      { path: "airlines", element: <AirlinesPage /> },
      { path: "schedule", element: <ScheduleFlightPage /> },
      { path: "interfaces", element: <InterfacesPage /> },
    ],
  },
]);
