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

import { ExitProcessError } from "@osdk/cli.common";
import { consola } from "consola";

import type { ManagedTarget } from "./resolveTargets.mjs";

export interface ApplyTargetsDeps {
  npmInstall: (
    specs: ReadonlyArray<{ pkg: string; version: string }>
  ) => Promise<void>;
}

/**
 * Install `toInstall` pinned to exact versions in one `npm install`, or preview
 * the changes under `--dryRun`.
 */
export async function applyTargets(
  toInstall: ReadonlyArray<ManagedTarget>,
  args: { dryRun: boolean },
  deps: ApplyTargetsDeps,
  alreadyInSync = 0
): Promise<void> {
  if (args.dryRun) {
    for (const t of toInstall) {
      consola.info(
        `Would install ${t.pkg}@${t.version} (currently ${
          t.current ?? "unset"
        }).`
      );
    }
    return;
  }

  try {
    await deps.npmInstall(
      toInstall.map((t) => ({ pkg: t.pkg, version: t.version }))
    );
  } catch (e) {
    const detail =
      e instanceof Error
        ? ((e as { stderr?: string }).stderr ?? e.message)
        : String(e);
    throw new ExitProcessError(
      1,
      `Failed to install ${toInstall.length} SDK(s).`,
      `Check your network and .npmrc registry auth (FOUNDRY_TOKEN), then re-run.\n${detail}`,
      e instanceof Error ? e : undefined
    );
  }

  for (const t of toInstall) {
    consola.success(`${t.pkg}: ${t.current ?? "unset"} → ${t.version}`);
  }
  consola.success(
    `Synced ${toInstall.length} SDK(s)${
      alreadyInSync > 0 ? ` (${alreadyInSync} already in sync)` : ""
    }`
  );
}
