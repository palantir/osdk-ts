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

import type { RecordedRequest } from "@osdk/shared.test";

/**
 * The names a trace carries, bucketed by what kind of ontology entity each one is.
 *
 * Bucketed structurally -- by the URL segment or body field the name sat in -- rather
 * than by substring matching, because `foo.bar.Employee` contains `Employee`, so a
 * substring assertion would pass on a trace where nothing had been remapped at all.
 */
export interface WireNames {
  ontologyRids: string[];
  branches: string[];
  objectTypes: string[];
  interfaceTypes: string[];
  actions: string[];
  queries: string[];
  queryVersions: string[];
  properties: string[];
  links: string[];
}

const ONTOLOGY_RID = /\/api\/v\d+\/ontologies\/([^/?]+)/u;
const PATH_PATTERNS = {
  objectTypes: [/\/objectTypes\/([^/?]+)/u, /\/objects\/([^/?]+)/u],
  interfaceTypes: [/\/interfaceTypes\/([^/?]+)/u],
  actions: [/\/actionTypes\/([^/?]+)/u, /\/actions\/([^/?]+)\/apply/u],
  queries: [/\/queryTypes\/([^/?]+)/u, /\/queries\/([^/?]+)\/execute/u],
  links: [/\/links\/([^/?]+)/u],
} as const;

/** Body fields whose value is an object type name. */
const OBJECT_TYPE_FIELDS = new Set([
  "objectType",
  "objectTypeApiName",
  "objectApiName",
]);
/** Body fields whose value is an interface type name. */
const INTERFACE_TYPE_FIELDS = new Set([
  "interfaceType",
  "interfaceTypeApiName",
]);
/** Body fields whose value is a property name. */
const PROPERTY_FIELDS = new Set(["field", "propertyIdentifier"]);
/** Body fields whose value is a link name. */
const LINK_FIELDS = new Set(["link", "linkType"]);

export function extractWireNames(requests: RecordedRequest[]): WireNames {
  const found: Record<keyof WireNames, Set<string>> = {
    ontologyRids: new Set(),
    branches: new Set(),
    objectTypes: new Set(),
    interfaceTypes: new Set(),
    actions: new Set(),
    queries: new Set(),
    queryVersions: new Set(),
    properties: new Set(),
    links: new Set(),
  };

  for (const request of requests) {
    const [path, search] = splitPath(request.path);

    add(found.ontologyRids, ONTOLOGY_RID.exec(path)?.[1]);
    add(found.branches, search.get("branch"));
    add(found.queryVersions, search.get("version"));

    for (const [bucket, patterns] of Object.entries(PATH_PATTERNS)) {
      for (const pattern of patterns) {
        add(
          found[bucket as keyof typeof PATH_PATTERNS],
          pattern.exec(path)?.[1],
        );
      }
    }

    walkBody(request.body, found);
  }

  return {
    ontologyRids: sorted(found.ontologyRids),
    branches: sorted(found.branches),
    objectTypes: sorted(found.objectTypes),
    interfaceTypes: sorted(found.interfaceTypes),
    actions: sorted(found.actions),
    queries: sorted(found.queries),
    queryVersions: sorted(found.queryVersions),
    properties: sorted(found.properties),
    links: sorted(found.links),
  };
}

function walkBody(
  value: unknown,
  found: Record<keyof WireNames, Set<string>>,
): void {
  if (Array.isArray(value)) {
    for (const entry of value) walkBody(entry, found);
    return;
  }
  if (typeof value !== "object" || value == null) return;

  for (const [key, child] of Object.entries(value as Record<string, unknown>)) {
    if (typeof child === "string") {
      if (OBJECT_TYPE_FIELDS.has(key)) add(found.objectTypes, child);
      if (INTERFACE_TYPE_FIELDS.has(key)) add(found.interfaceTypes, child);
      if (PROPERTY_FIELDS.has(key)) add(found.properties, child);
      if (LINK_FIELDS.has(key)) add(found.links, child);
      continue;
    }

    // `selectV2: [{ type: "property", apiName }]` -- the only place a *property* name
    // hides behind a bare `apiName` key, which is otherwise a type name.
    if (key === "selectV2" && Array.isArray(child)) {
      for (const entry of child) {
        if (typeof entry === "object" && entry != null) {
          const apiName = (entry as Record<string, unknown>)["apiName"];
          if (typeof apiName === "string") add(found.properties, apiName);
        }
      }
      continue;
    }

    if (key === "select" && Array.isArray(child)) {
      for (const entry of child) {
        if (typeof entry === "string") add(found.properties, entry);
      }
      continue;
    }

    walkBody(child, found);
  }
}

function splitPath(raw: string): [string, URLSearchParams] {
  const index = raw.indexOf("?");
  return index === -1
    ? [raw, new URLSearchParams()]
    : [raw.slice(0, index), new URLSearchParams(raw.slice(index + 1))];
}

function add(set: Set<string>, value: string | null | undefined): void {
  if (value != null && value.length > 0) set.add(decodeURIComponent(value));
}

function sorted(set: Set<string>): string[] {
  return Array.from(set).sort();
}
