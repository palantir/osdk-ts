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

import type {
  OntologyGraphModel,
  OntologyGraphModelDeps,
} from "./OntologyGraphModel.js";

/**
 * Where an {@link OntologyGraphModel} gets its object types from. Bundles the
 * model's `fetchObjectMetadata` dependency with a `seed` step that decides
 * which types to show and how to keep them in sync.
 *
 * A static-ontology caller ({@link DumpOntologySource}) seeds every type in a
 * dump once; a live-client caller might seed the types an app has queried and
 * re-seed as more are used. The graph view stays identical across both because
 * it only ever sees a `model` and a `seed`.
 */
export interface OntologySource extends OntologyGraphModelDeps {
  /**
   * Seed `model` with this source's object types and wire any re-sync. Called
   * from the view's `useSyncExternalStore` subscribe callback (so callers avoid
   * a `useEffect`); return an optional teardown for anything subscribed here.
   */
  seed(model: OntologyGraphModel): (() => void) | void;
}
