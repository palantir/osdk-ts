import React from "react";
import css from "./Header.module.css";

function Header(): React.ReactElement {
  return (
    <div className={css.header}>
      <div className={css.logos}>
        <a
          href="https://www.palantir.com/docs/foundry/ontology-sdk/overview/"
          target="_blank"
        >
          <img src="/palantir.svg" className={css.logo} alt="Palantir logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src="/react.svg" className={css.logo} alt="React logo" />
        </a>
      </div>
      <h2 className={css.heading}>
        Build your React application with Foundry!
      </h2>
    </div>
  );
}

export default Header;
