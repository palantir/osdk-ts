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

import { registerHooks } from "node:module";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

import { observeDefinitionFailures } from "../validation.js";
import { SourceSession } from "./runtime.js";

/**
 * Adds diagnostics to a single trusted ontology evaluation. Node retains ownership
 * of resolution, supported formats, transformations, module identity, and caching.
 * The caller must use a fresh process or worker for each evaluation. For example,
 * loading ontology.ts twice here does not rerun it: Node reuses its cached module.
 */
export async function loadOntologySource(
  entryPoint: string,
): Promise<Readonly<Record<string, unknown>>> {
  const session = new SourceSession();
  const hooks = registerHooks({
    load(url, context, nextLoad) {
      // nextLoad delegates to the remaining host hooks and Node's default loader.
      // Record the file only after loading succeeds, leaving its source unchanged.
      // E.g. importing ontology.ts -> objects.ts registers both files for stack lookup.
      const result = nextLoad(url, context);
      if (url.startsWith("file:")) session.registerScript(url);
      return result;
    },
  });
  // Observe the failure before the author's stack unwinds. For example, a
  // defineObject error caught inside ontology.ts is recorded but never enriched.
  const stop = observeDefinitionFailures(session.observe);
  try {
    return await import(pathToFileURL(resolve(entryPoint)).href);
  } catch (error) {
    return await session.rethrow(error);
  } finally {
    stop();
    hooks.deregister();
  }
}
