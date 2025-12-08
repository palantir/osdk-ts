import book from "/book.svg";

import React from "react";
import css from "./Osdk.module.css";

function Osdk(): React.ReactElement {
  return (
    <div className={css.osdk}>
      <div>
        <span>OSDK: </span>
        <span className={css.tag}>@osdk/e2e.generated.catchall</span>
      </div>
      <a
        href="https://fake.palantirfoundry.com/workspace/developer-console/app/ri.third-party-applications.main.application.fake/docs/guide/loading-data?language=typescript"
        className={css.docs}
        target="_blank"
        rel="noreferrer"
      >
        <img src={book} width={16} height={16} alt="Book icon"></img>
        <span>View documentation</span>
      </a>
    </div>
  );
}

export default Osdk;
