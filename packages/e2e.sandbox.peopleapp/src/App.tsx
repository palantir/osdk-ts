import { useCallback } from "react";

import "./App.css";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import { Button } from "./components/Button.js";
import { H1 } from "./components/headers.js";

function PeopleApp() {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateTo = useCallback(
    (path: string) => () => navigate(path),
    [navigate]
  );

  const path = location.pathname;
  const activeTab =
    path === "/" || path === "/employees"
      ? "employees"
      : path === "/employees/filter-list"
        ? "filter-list"
        : path === "/employees/action-form-filter-list-repro"
          ? "action-form-filter-list-repro"
          : path === "/form"
            ? "form"
            : path === "/person"
              ? "person"
              : path === "/aip-agent-chat"
                ? "aip-agent-chat"
                : "offices";

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <H1>People App</H1>

      <div className="flex space-x-4 mb-6">
        <Button
          variant="tab"
          active={activeTab === "employees"}
          onClick={navigateTo("/employees")}
        >
          Employees
        </Button>
        <Button
          variant="tab"
          active={activeTab === "filter-list"}
          onClick={navigateTo("/employees/filter-list")}
        >
          Filter List
        </Button>
        <Button
          variant="tab"
          active={activeTab === "action-form-filter-list-repro"}
          onClick={navigateTo("/employees/action-form-filter-list-repro")}
        >
          ActionForm Repro
        </Button>
        <Button
          variant="tab"
          active={activeTab === "offices"}
          onClick={navigateTo("/offices")}
        >
          Offices
        </Button>
        <Button
          variant="tab"
          active={activeTab === "form"}
          onClick={navigateTo("/form")}
        >
          Form
        </Button>
        <Button
          variant="tab"
          active={activeTab === "person"}
          onClick={navigateTo("/person")}
        >
          Person Interface Table
        </Button>
        <Button
          variant="tab"
          active={activeTab === "aip-agent-chat"}
          onClick={navigateTo("/aip-agent-chat")}
        >
          AipAgentChat
        </Button>
      </div>

      <Outlet />
    </main>
  );
}

export default PeopleApp;
