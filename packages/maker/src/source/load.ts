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
 * The caller must use a fresh process or worker for each evaluation.
 */
export async function loadOntologySource(
  entryPoint: string,
): Promise<Readonly<Record<string, unknown>>> {
  const session = new SourceSession();
  const hooks = registerHooks({
    load(url, context, nextLoad) {
      const result = nextLoad(url, context);
      if (url.startsWith("file:")) session.registerScript(url);
      return result;
    },
  });
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
