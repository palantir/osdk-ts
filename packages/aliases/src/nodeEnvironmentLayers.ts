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

import * as fs from "node:fs";

import type { AliasesFile } from "./AliasesFile.js";
import { parseAliasesFile } from "./AliasesFile.js";
import type { AliasLayer } from "./registry.js";

export const ALIASES_JSON_FILE_ENV_VAR = "ALIASES_JSON_FILE";
export const RESOURCES_JSON_FILE_ENV_VAR = "RESOURCES_JSON_FILE";

/**
 * The two environment-variable layers, read on first resolve. Deliberately *not* wired up
 * by the default entrypoint: this module statically imports `node:fs`, and
 * `@osdk/aliases` is a peer dependency of every generated SDK, so it must not drag a Node
 * builtin into browser bundles.
 */
export function loadNodeEnvironmentLayers(): readonly AliasLayer[] {
  return [
    describeLayer(ALIASES_JSON_FILE_ENV_VAR),
    describeLayer(RESOURCES_JSON_FILE_ENV_VAR),
  ];
}

function describeLayer(envVar: string): AliasLayer {
  const path = globalThis.process?.env?.[envVar];
  if (path == null || path === "") {
    return { description: envVar, file: undefined };
  }
  return {
    description: `${envVar} (${path})`,
    file: readAliasesFile(envVar, path),
  };
}

function readAliasesFile(
  envVar: string,
  path: string,
): AliasesFile | undefined {
  if (!fs.existsSync(path)) {
    throw new Error(
      `[@osdk/aliases] ${envVar} is set to "${path}" but no file exists there.`,
    );
  }
  let json: unknown;
  try {
    json = JSON.parse(fs.readFileSync(path, "utf-8"));
  } catch (e) {
    throw new Error(
      `[@osdk/aliases] ${envVar} ("${path}") is not valid JSON: ${
        e instanceof Error ? e.message : String(e)
      }`,
      { cause: e },
    );
  }
  if (isLivePreviewResourcesFile(json)) {
    // RESOURCES_JSON_FILE is function-registry's live-preview format. It carries platform
    // resources only and has no way to express ontology entity aliases, so it
    // contributes an empty layer rather than failing a process that legitimately has one.
    return undefined;
  }
  try {
    return parseAliasesFile(json);
  } catch (e) {
    throw new Error(
      `[@osdk/aliases] ${envVar} ("${path}") is not a usable aliases file: ${
        e instanceof Error ? e.message : String(e)
      }`,
      { cause: e },
    );
  }
}

function isLivePreviewResourcesFile(json: unknown): boolean {
  return (
    typeof json === "object" &&
    json != null &&
    !("defaults" in json) &&
    "resources" in json
  );
}
