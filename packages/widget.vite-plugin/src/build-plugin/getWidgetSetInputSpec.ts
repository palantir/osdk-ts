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

import { readFile } from "fs/promises";

import type {
  DatasetInputSpec,
  OntologySdkInputSpec,
  WidgetSetAuthorizationsInputSpec,
  WidgetSetInputSpec,
} from "@osdk/widget.api";

import type { PackageJson } from "../common/PackageJson.js";
import type { ResourcesJson } from "../common/ResourcesJson.js";
import { validateAliases } from "../common/validateAliases.js";
import { validateDatasets } from "../common/validateDatasets.js";
import { visitNpmPackages } from "../common/visitNpmPackages.js";

export async function getWidgetSetInputSpec(
  packageJsonPath: string,
  resourcesJsonPath: string | undefined,
): Promise<WidgetSetInputSpec> {
  const [sdks, resourcesJson] = await Promise.all([
    discoverOntologySdkInputSpecs(packageJsonPath),
    parseResourcesJson(resourcesJsonPath),
  ]);
  const { datasets } = getResources(resourcesJson);
  return {
    discovered: {
      sdks,
      datasets,
      authorizations: getAuthorizations(resourcesJson),
    },
  };
}

async function discoverOntologySdkInputSpecs(
  packageJsonPath: string,
): Promise<Array<OntologySdkInputSpec>> {
  const sdks = new Set<string>();
  const onVisit = (_packageJsonPath: string, packageJson: PackageJson) => {
    if (packageJson.osdk?.packageRid != null) {
      sdks.add(toKey(packageJson.osdk.packageRid, packageJson.version));
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

function getResources(resourcesJson: ResourcesJson | undefined): {
  datasets: Array<DatasetInputSpec>;
} {
  const datasets: unknown = resourcesJson?.resources?.datasets ?? [];
  validateDatasets(datasets);
  validateAliases({ datasets });
  return {
    datasets: datasets.map(({ identifier, usage, alias }) => ({
      identifier: { rid: identifier.rid },
      usage: [...new Set(usage)],
      alias,
    })),
  };
}

function getAuthorizations(
  resourcesJson: ResourcesJson | undefined,
): WidgetSetAuthorizationsInputSpec | undefined {
  if (resourcesJson == null) {
    return undefined;
  }
  const { read, requiredRead } = resourcesJson.authorizations ?? {};
  return {
    read,
    requiredRead,
  };
}

async function parseResourcesJson(
  resourcesJsonPath: string | undefined,
): Promise<ResourcesJson | undefined> {
  if (resourcesJsonPath == null) {
    return undefined;
  }
  let content: string;
  try {
    content = await readFile(resourcesJsonPath, "utf-8");
  } catch (err) {
    if ((err as { code?: string }).code === "ENOENT") {
      // the file is not present in the repo
      return undefined;
    }
    throw err;
  }

  try {
    return JSON.parse(content) as ResourcesJson;
  } catch (err) {
    throw new Error(
      `Failed to parse resources.json content from file "${resourcesJsonPath}"`,
      { cause: err },
    );
  }
}
