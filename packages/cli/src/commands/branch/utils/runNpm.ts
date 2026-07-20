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

import { execa } from "execa";

/** The npm dist tags (tag -> version) published for `pkg`. */
export async function npmDistTags(
  pkg: string
): Promise<Record<string, string>> {
  const { stdout } = await execa("npm", ["view", pkg, "dist-tags", "--json"]);
  const trimmed = stdout.trim();
  return trimmed === "" ? {} : (JSON.parse(trimmed) as Record<string, string>);
}

/**
 * Install one or more packages pinned to exact versions in a single `npm install`;
 * a no-op when `specs` is empty.
 */
export async function npmInstall(
  specs: ReadonlyArray<{ pkg: string; version: string }>
): Promise<void> {
  if (specs.length === 0) return;
  await execa("npm", [
    "install",
    ...specs.map((s) => `${s.pkg}@${s.version}`),
    "--save-exact",
  ]);
}
