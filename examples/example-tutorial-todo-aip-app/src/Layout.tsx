import todoAppLogo from "/todo-aip-app.svg";
import React from "react";
import css from "./Layout.module.css";

interface LayoutProps {
  children?: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className={css.header}>
        <img src={todoAppLogo} className={css.logo} alt="Todo App logo" />
        <div className={css.title}>
          Ontology SDK Tutorial - To do App Powered by AIP
        </div>
      </div>
      {children}
    </>
  );
}

export default Layout;
