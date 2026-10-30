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

/** Uses source diagnostics on Node 24+, otherwise ordinary module loading. */
export async function loadOntologySource(
  entryPoint: string,
): Promise<Readonly<Record<string, unknown>>> {
  if (Number(process.versions.node.split(".")[0]) < 24) {
    const { pathToFileURL } = await import("node:url");
    return import(pathToFileURL(entryPoint).href);
  }

  try {
    await import("typescript");
  } catch (cause) {
    throw new Error(
      "Unable to load TypeScript for source-aware validation. Install the optional `typescript` peer dependency.",
      { cause },
    );
  }
  const source = await import("../source/load.js");
  return source.loadOntologySource(entryPoint);
}
