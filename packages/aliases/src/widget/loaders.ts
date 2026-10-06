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

import { isHtmlDocument } from "../isHtmlDocument.js";
import type { Resource, ResourcesJson, ResolvedAliases } from "./types.js";

let cachedResolvedAliases: Promise<ResolvedAliases> | undefined;

/** Shares the first load across resource types and retries failed loads. */
export function loadResolvedAliases(): Promise<ResolvedAliases> {
  cachedResolvedAliases ??= loadBrowserAliases().catch((error: unknown) => {
    cachedResolvedAliases = undefined;
    throw error;
  });
  return cachedResolvedAliases;
}

export async function loadBrowserAliases(): Promise<ResolvedAliases> {
  const declarations = await readResourcesFile();
  return {
    datasets: resolveResources(declarations?.resources?.datasets),
  };
}

async function readResourcesFile(): Promise<ResourcesJson | undefined> {
  const url = new URL("resources.json", document.baseURI).toString();
  const response = await fetch(url);
  if (response.status === 404) {
    return undefined;
  }
  if (!response.ok) {
    throw new Error(
      `Failed to load widget aliases from ${url}: ${response.status} ${response.statusText}`,
    );
  }

  const body = await response.text();
  if (isHtmlDocument(body)) {
    return undefined;
  }

  try {
    return JSON.parse(body) as ResourcesJson;
  } catch (error) {
    throw new Error(
      `Failed to read widget aliases from ${url}: not valid JSON.`,
      {
        cause: error,
      },
    );
  }
}

function resolveResources<Identifier>(
  resources: Resource<Identifier>[] | undefined,
): Record<string, Identifier> {
  // Declaration validation belongs to widget manifest generation.
  const result = Object.create(null) as Record<string, Identifier>;
  for (const { alias, identifier } of resources ?? []) {
    if (alias != null) {
      result[alias] = identifier;
    }
  }
  return result;
}
