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

import { Classes, Icon, Tooltip } from "@blueprintjs/core";
import type { Intent } from "@blueprintjs/core";
import classNames from "classnames";
import React from "react";

import { PanelContainerContext } from "./PanelContainerContext.js";

import styles from "./Metric.module.scss";

export interface MetricProps {
  /** The metric label, e.g. "Cache hit rate". */
  title: string;
  /**
   * The formatted value to display, e.g. "74%", "340ms", or a count. Pass
   * `null`/`undefined` when there is no data yet — the cell renders a muted
   * "N/A" and ignores `intent`.
   */
  value: string | number | null | undefined;
  /**
   * Colors the value via Blueprint's `Intent`; defaults to `"none"` (no color).
   * Only `success`/`warning`/`danger` are colored. Ignored when `value` is empty.
   */
  intent?: Intent;
  /**
   * When set, renders a top-right "?" icon whose tooltip shows this content — the
   * metric's definition and, where the value is colored, its color key.
   */
  help?: React.ReactNode;
  /** Optional content rendered below the value, e.g. a "View in …" link. */
  footer?: React.ReactNode;
}

/**
 * A single metric cell — label, value, and optional help tooltip / footer. Meant
 * to sit inside a `Metrics` grid, which draws the surrounding border and the
 * hairline dividers between cells (the cell itself is borderless).
 */
export function Metric({
  title,
  value,
  help,
  footer,
  intent = "none",
}: MetricProps): React.JSX.Element {
  const isEmpty = value == null || value === "";
  const panelContainer = React.useContext(PanelContainerContext);
  return (
    <div className={styles.metricItem}>
      <div className={styles.metricItemHeader}>
        <span className={Classes.TEXT_MUTED}>{title}</span>
        {help != null && (
          <Tooltip
            content={<div className={styles.metricHelpContent}>{help}</div>}
            portalContainer={panelContainer ?? undefined}
          >
            <Icon
              icon="help"
              className={styles.metricHelp}
              aria-label={`About ${title}`}
            />
          </Tooltip>
        )}
      </div>
      <span
        className={classNames(
          styles.metricValue,
          isEmpty ? styles.na : styles[intent]
        )}
      >
        {isEmpty ? "N/A" : value}
      </span>
      {footer != null && <div className={styles.metricFooter}>{footer}</div>}
    </div>
  );
}
