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

import type { MonitorStore } from "../store/MonitorStore.js";

/** Distinct object-type and action-type counts derived from the ontology. */
export interface OntologyFacetCounts {
  objectTypeCount: number;
  actionTypeCount: number;
}

/**
 * Selector over {@link useComponentOntology} that returns just the distinct
 * object-type and action-type counts for the Overview's count tiles.
 *
 * STUB — not yet implemented. Returns sentinel `-1`s so tests fail on assertion.
 */
export function useOntologyFacets(
  _monitorStore: MonitorStore
): OntologyFacetCounts {
  return { objectTypeCount: -1, actionTypeCount: -1 };
}
