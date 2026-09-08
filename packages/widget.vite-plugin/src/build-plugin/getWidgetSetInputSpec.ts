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
  OntologySdkInputSpec,
  WidgetSetAuthorizationsInputSpec,
  WidgetSetInputSpec,
} from "@osdk/widget.api";

import type { PackageJson } from "../common/PackageJson.js";
import type { ResourcesJson } from "../common/ResourcesJson.js";
import { visitNpmPackages } from "../common/visitNpmPackages.js";

export async function getWidgetSetInputSpec(
  packageJsonPath: string,
  resourcesJsonPath: string,
): Promise<WidgetSetInputSpec> {
  const [sdks, authorizations] = await Promise.all([
    discoverOntologySdkInputSpecs(packageJsonPath),
    getAuthorizations(resourcesJsonPath),
  ]);
  return {
    discovered: {
      sdks,
      authorizations,
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

async function getAuthorizations(
  resourcesJsonPath: string,
): Promise<WidgetSetAuthorizationsInputSpec | undefined> {
  const parsedResourcesJson: ResourcesJson | undefined =
    await parseResourcesJson(resourcesJsonPath);
  if (parsedResourcesJson == null) {
    return undefined;
  }
  const { read, requiredRead } = parsedResourcesJson.authorizations ?? {};
  return {
    read,
    requiredRead,
  };
}

async function parseResourcesJson(
  resourcesJsonPath: string,
): Promise<ResourcesJson | undefined> {
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
