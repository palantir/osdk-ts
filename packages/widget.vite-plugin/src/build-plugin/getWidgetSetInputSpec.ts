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

import type {
  OntologySdkInputSpec,
  WidgetSetInputSpec,
} from "@osdk/widget.api";
import type { PackageJson } from "../common/PackageJson.js";
import { visitNpmPackages } from "../common/visitNpmPackages.js";

export async function getWidgetSetInputSpec(
  packageJsonPath: string,
): Promise<WidgetSetInputSpec> {
  const sdks = await discoverOntologySdkInputSpecs(packageJsonPath);
  return {
    discovered: {
      sdks,
    },
  };
}

async function discoverOntologySdkInputSpecs(
  packageJsonPath: string,
): Promise<Array<OntologySdkInputSpec>> {
  const sdks = new Set<string>();
  const onVisit = (_packageJsonPath: string, packageJson: PackageJson) => {
    if (packageJson.osdk != null && packageJson.osdk.rid != null) {
      sdks.add(toKey(packageJson.osdk.rid, packageJson.version));
    }
  };
  await visitNpmPackages(packageJsonPath, onVisit);
  return [...sdks].map(fromKey);
}

const SEPARATOR = "//";
const toKey = (rid: string, version: string) => `${rid}${SEPARATOR}${version}`;
const fromKey = (key: string): OntologySdkInputSpec => {
  const [rid, version] = key.split(SEPARATOR);
  return {
    rid,
    version,
  };
};
