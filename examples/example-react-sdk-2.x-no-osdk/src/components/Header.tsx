import palantir from "/palantir.svg";
import react from "/react.svg";

import React from "react";
import css from "./Header.module.css";

function Header(): React.ReactElement {
  return (
    <header className={css.header}>
      <div className={css.logos}>
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
      <h2 className={css.heading}>
        Build your React application with Foundry!
      </h2>
    </header>
  );
}

export default Header;
