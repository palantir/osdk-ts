/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import { readFile, writeFile } from "fs/promises";

export interface Manifest {
  "manifest-version": string;
  "extensions": {
    "product-dependencies": ReadonlyArray<{
      "product-group": string;
      "product-name": string;
      "minimum-version": string;
      "maximum-version": string;
      "optional": boolean;
    }>;
  };
}

export async function updateSls(
  manifest: Manifest,
  output: string,
): Promise<void> {
  // the whole manifest shape is hand-jammed so lets have a quick sanity check to make sure we're ok
  if (manifest["manifest-version"] !== "1.0") {
    throw new Error(
      `Unsupported manifest version ${manifest["manifest-version"]}`,
    );
  }

  const { findUp } = await import("find-up");

  const packageJsonFile = await findUp("package.json", { cwd: output });
  if (!packageJsonFile) {
    throw new Error("Could not find target package.json");
  }
  const packageJsonRead = await readFile(packageJsonFile, { encoding: "utf8" });
  const packageJson = JSON.parse(packageJsonRead);

  const dependencies:
    | Record<
      string,
      { minVersion: string; maxVersion: string; optional: boolean }
    >
    | undefined = packageJson?.["sls"]?.["dependencies"];
  if (!dependencies) {
    throw new Error("package.json does not have an sls block yet?");
  }

  const deps = manifest?.extensions?.["product-dependencies"];

  for (const dep of deps) {
    if (dep.optional) {
      throw new Error("No support for optional dependencies");
    }
    const key = `${dep["product-group"]}:${dep["product-name"]}`;
    const value = {
      minVersion: dep["minimum-version"],
      maxVersion: dep["maximum-version"],
      optional: true,
    };
    dependencies[key] = value;
  }

  await writeFile(packageJsonFile, JSON.stringify(packageJson, null, 2));
}
