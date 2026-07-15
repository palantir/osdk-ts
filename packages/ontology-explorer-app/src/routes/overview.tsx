/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import { Icon, NonIdealState, Spinner } from "@blueprintjs/core";
import { useQuery } from "@tanstack/react-query";
import * as React from "react";

import { fetchLocalOntologyMetadata } from "../loaders/fetchLocalOntologyMetadata.js";
import {
  DumpOntologySource,
  OntologyGraphView,
} from "../ontology-graph/index.js";
import styles from "./overview.module.scss";

export function OverviewPage(): React.ReactElement {
  const { data: source, error, isLoading } = useQuery({
    queryKey: ["local-ontology"],
    queryFn: async () =>
      DumpOntologySource.parse(await fetchLocalOntologyMetadata()),
    staleTime: Infinity,
    retry: false,
  });

  let statusDescription: string;
  if (error != null) {
    statusDescription = error instanceof Error ? error.message : String(error);
  } else if (isLoading) {
    statusDescription = "Reading the local ontology from /api/ontology.";
  } else {
    statusDescription = "No ontology data found in the local ontology.";
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <span className={styles.brandIcon}>
          <Icon icon="graph" size={18} />
        </span>
        <div className={styles.brandText}>
          <span className={styles.title}>Ontology Explorer</span>
        </div>
      </header>
      <main className={styles.body}>
        {source != null
          ? <OntologyGraphView source={source} theme="light" />
          : (
            <NonIdealState
              icon={error != null ? "error" : <Spinner size={28} />}
              title={error != null
                ? "Couldn't load ontology"
                : "Loading ontology"}
              description={statusDescription}
            />
          )}
      </main>
    </div>
  );
}
