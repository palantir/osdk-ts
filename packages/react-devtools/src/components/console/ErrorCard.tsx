/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Button, Callout, Code, Collapse, type IconName } from "@blueprintjs/core";
import React, { useState } from "react";

import type { Issue } from "../issueTypes.js";

import styles from "./ConsolePanel.module.scss";

function categoryIcon(category: string): IconName {
  switch (category) {
    case "action failure": {
      return "cog";
    }
    case "unhandled rejection": {
      return "outdated";
    }
    case "console error": {
      return "console";
    }
    default: {
      return "error";
    }
  }
}

interface ErrorCardProps {
  issue: Issue;
}

/**
 * A single structured error, unified across action failures, window errors and
 * console.error, with an expandable stack / details section.
 */
export const ErrorCard: React.FC<ErrorCardProps> = ({ issue }) => {
  const [open, setOpen] = useState(false);
  const expandable = issue.expandable;
  const hasDetail =
    expandable !== undefined &&
    (expandable.stack !== undefined || expandable.detailsJson !== undefined);

  return (
    <Callout
      intent="danger"
      icon={categoryIcon(issue.category)}
      title={issue.title}
      className={styles.errorCard}
    >
      <div className={styles.errorMeta}>
        {issue.category} · {new Date(issue.timestamp).toLocaleTimeString()}
      </div>
      <div className={styles.errorMessage}>{issue.message}</div>
      {issue.suggestion !== undefined ? (
        <div className={styles.errorSuggestion}>{issue.suggestion}</div>
      ) : null}
      {hasDetail ? (
        <>
          <Button
            variant="minimal"
            size="small"
            icon={open ? "chevron-down" : "chevron-right"}
            onClick={() => setOpen(!open)}
          >
            {open ? "Hide details" : "Details"}
          </Button>
          <Collapse isOpen={open}>
            {expandable?.stack !== undefined ? (
              <Code className={styles.errorStack}>{expandable.stack}</Code>
            ) : null}
            {expandable?.detailsJson !== undefined ? (
              <Code className={styles.errorStack}>
                {expandable.detailsJson}
              </Code>
            ) : null}
          </Collapse>
        </>
      ) : null}
    </Callout>
  );
};
