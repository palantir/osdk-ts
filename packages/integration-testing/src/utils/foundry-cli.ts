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

import { exec } from "node:child_process";
import { promisify } from "node:util";

import { gte, valid } from "semver";

export const MIN_FOUNDRY_CLI_VERSION = "0.200.0";

const FOUNDRY_VERSION_PATTERN =
  /cli (\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?(?:\+[0-9A-Za-z.-]+)?)/u;

export type FoundryProbeResult =
  | {
      type: "installed";
      version: string;
    }
  | {
      type: "version-incompatible";
      version: string;
    }
  | {
      type: "version-error";
    }
  | {
      type: "not-found";
    };

const parseFoundryVersion = (stdout: string): string | undefined =>
  stdout.trim().match(FOUNDRY_VERSION_PATTERN)?.[1];

const versionIsAtMinimum = (version: string, min: string): boolean =>
  valid(version) != null && valid(min) != null && gte(version, min);

const execAsync = promisify(exec);

export const checkFoundryCliVersion = (): Promise<FoundryProbeResult> => {
  return execAsync("which foundry")
    .then(() => execAsync("foundry --version"))
    .then<FoundryProbeResult>(({ stdout }) => {
      const version = parseFoundryVersion(stdout);
      if (!version) return { type: "version-error" };
      const isMin = versionIsAtMinimum(version, MIN_FOUNDRY_CLI_VERSION);
      if (!isMin) return { type: "version-incompatible", version };
      return { type: "installed", version };
    })
    .catch<FoundryProbeResult>(() => ({ type: "not-found" }));
};
