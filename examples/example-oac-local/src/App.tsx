import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const NAV_ITEMS = [
  { to: "/", label: "Flights", end: true },
  { to: "/airlines", label: "Airlines" },
  { to: "/schedule", label: "Schedule" },
  { to: "/interfaces", label: "Interfaces" },
] as const;

export function App(): React.ReactElement {
  return (
    <div className="app-shell">
      <nav className="app-nav">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={"end" in item ? item.end : false}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      <main className="app-main">
        <Outlet />
      </main>
    </div>
  );
}
