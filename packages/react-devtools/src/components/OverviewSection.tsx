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

import { Section, SectionCard } from "@blueprintjs/core";
import React from "react";

import styles from "./MonitoringPanel.module.scss";

export interface OverviewSectionProps {
  /** The section header title, e.g. "Ontology". */
  title: string;
  /** The section body — typically a grid of tiles. */
  children: React.ReactNode;
}

/**
 * A collapsible Overview section built on Blueprint's `Section`/`SectionCard`.
 * The header (bold title + collapse chevron) and dark theming come from
 * Blueprint — the panel root applies `Classes.DARK`, so no `.bp6-*` overrides
 * are needed; styling is done purely through the components' `className` props.
 * Collapse is uncontrolled and defaults to open.
 */
export function OverviewSection({
  title,
  children,
}: OverviewSectionProps): React.JSX.Element {
  return (
    <Section
      collapsible
      compact
      title={title}
      className={styles.overviewSection}
    >
      <SectionCard className={styles.overviewSectionCard}>
        {children}
      </SectionCard>
    </Section>
  );
}
