import palantir from "/palantir.svg";
import react from "/react.svg";

import React from "react";
import css from "./Layout.module.css";

interface LayoutProps {
  children?: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <div>
        <a
          href="https://www.palantir.com/docs/foundry/ontology-sdk/overview/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={palantir} className={css.logo} alt="Palantir logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={react} className={css.logo} alt="React logo" />
        </a>
      </div>
      {children}
    </>
  );
}

export default Layout;
