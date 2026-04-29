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

import type { InterfaceDefinition, InterfaceMetadata } from "@osdk/api";
import type { Client } from "@osdk/client";

/**
 * A nested map: sourceInterfaceApiName → linkedInterfaceApiName → concrete link API name.
 *
 * Allows looking up the concrete link name for an interface link constraint
 * when the source and target interface types are known.
 */
export type InterfaceLinkMap = ReadonlyMap<string, ReadonlyMap<string, string>>;

interface InterfaceLinkEntry {
  readonly sourceInterfaceApiName: string;
  readonly linkConstraintApiName: string;
  readonly targetInterfaceApiName: string;
}

/**
 * Builds a nested map of interface link constraints from a set of interfaces.
 * For each interface, reads its link metadata to discover which other interfaces
 * it links to via link type constraints.
 *
 * This is useful when the ontology uses interfaces extensively and you need
 * to map from interface link constraint names
 * to understand the relationship graph between interface types.
 *
 * Note: For actually traversing these links at runtime, use
 * `useOsdkObjects(InterfaceType, { pivotTo: "linkConstraintName" })` —
 * the server resolves interface link constraints automatically.
 * This utility is for introspection/metadata use cases.
 *
 * @example
 * const linkMap = await buildInterfaceLinkMap(client, [InterfaceA, InterfaceB]);
 * const linkName = linkMap.get("InterfaceA")?.get("InterfaceB");
 */
export async function buildInterfaceLinkMap(
  client: Client,
  interfaces: ReadonlyArray<InterfaceDefinition>,
): Promise<InterfaceLinkMap> {
  const metadataResults = await Promise.all(
    interfaces.map(async (iface) => {
      const metadata: InterfaceMetadata = await client.fetchMetadata(iface);
      return { iface, metadata };
    }),
  );

  const entries: InterfaceLinkEntry[] = [];
  for (const { iface, metadata } of metadataResults) {
    for (const [linkApiName, linkDef] of Object.entries(metadata.links)) {
      if (linkDef.targetType === "interface") {
        entries.push({
          sourceInterfaceApiName: iface.apiName,
          linkConstraintApiName: linkApiName,
          targetInterfaceApiName: linkDef.targetTypeApiName,
        });
      }
    }
  }

  const result = new Map<string, Map<string, string>>();
  for (const entry of entries) {
    let inner = result.get(entry.sourceInterfaceApiName);
    if (inner == null) {
      inner = new Map();
      result.set(entry.sourceInterfaceApiName, inner);
    }
    inner.set(entry.targetInterfaceApiName, entry.linkConstraintApiName);
  }

  return result;
}
