import { Button, Icon, Tag } from "@blueprintjs/core";
import React from "react";
import css from "./Osdk.module.css";

const DOCUMENTATION_URL =
  "https://fake.palantirfoundry.com/workspace/developer-console/app/ri.third-party-applications.main.application.fake/docs/guide/loading-data?language=typescript";

function Osdk(): React.ReactElement {
  return (
    <div className={css.osdk}>
      <div>
        <span>OSDK: </span>
        <Tag minimal={true}>@salfhaily/sdk</Tag>
      </div>
      <Button
        onClick={() => window.open(DOCUMENTATION_URL, "_blank", "noreferrer")}
        variant="minimal"
        icon={<Icon icon="book" aria-label="Book icon"></Icon>}
      >
        View documentation
      </Button>
    </div>
  );
}

export default Osdk;
