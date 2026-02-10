import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import { Button } from "./components/Button.js";
import { H1 } from "./components/headers.js";

function PeopleApp() {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const activeTab = path === "/" || path === "/employees"
    ? "employees"
    : path === "/employees/filter-list"
    ? "filter-list"
    : "offices";

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <H1>People App</H1>

      <div className="flex space-x-4 mb-6">
        <Button
          variant="tab"
          active={activeTab === "employees"}
          onClick={() => navigate("/employees")}
        >
          Employees
        </Button>
        <Button
          variant="tab"
          active={activeTab === "filter-list"}
          onClick={() => navigate("/employees/filter-list")}
        >
          Filter List
        </Button>
        <Button
          variant="tab"
          active={activeTab === "offices"}
          onClick={() => navigate("/offices")}
        >
          Offices
        </Button>
      </div>

      <Outlet />
    </main>
  );
}

export default PeopleApp;
