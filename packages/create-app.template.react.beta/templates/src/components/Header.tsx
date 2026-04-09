import palantir from "/palantir.svg";
import react from "/react.svg";

import { H2, Link } from "@blueprintjs/core";
import React from "react";
import css from "./Header.module.css";

function Header(): React.ReactElement {
  return (
    <header className={css.headerContainer}>
      <div className={css.logos}>
        <Link
          href="https://www.palantir.com/docs/foundry/ontology-sdk/overview/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={palantir} className={css.logo} alt="Palantir logo" />
        </Link>
        <Link href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={react} className={css.logo} alt="React logo" />
        </Link>
      </div>
      <H2 className={css.header}>Build your React application with Foundry!</H2>
    </header>
  );
}

export default Header;
