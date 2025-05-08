import palantirLogo from "/palantir.svg";
import reactLogo from "/react.svg";
import React from "react";
import css from "./Layout.module.css";

interface LayoutProps {
  children?: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className={css.header}>
        <a
          href="https://www.palantir.com/docs/foundry/ontology-sdk/overview/"
          target="_blank"
        >
          <img src={palantirLogo} className={css.logo} alt="Palantir logo" />
        </a>
        <div>
          <h1>@tutorial-advance-to-do-application/sdk</h1>
          <p>Exploring Advanced OSDK Topics: Interfaces, MediaSets, and More</p>
        </div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className={css.logo} alt="React logo" />
        </a>
      </div>
      {children}
    </>
  );
}

export default Layout;
