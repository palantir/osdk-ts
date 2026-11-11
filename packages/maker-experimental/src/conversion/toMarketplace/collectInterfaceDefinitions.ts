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

import type { InterfaceType } from "@osdk/maker";

export function collectInterfaceDefinitions(
  interfaces: InterfaceType[],
): Map<string, InterfaceType> {
  const definitions = new Map(
    interfaces.map((iface) => [iface.apiName, iface]),
  );
  const seen = new Set<InterfaceType>();
  const queue = [...interfaces];
  while (queue.length > 0) {
    const iface = queue.pop()!;
    if (seen.has(iface)) continue;
    seen.add(iface);
    const related = relatedInterfaces(iface);
    const existing = definitions.get(iface.apiName);
    // If we see two copies of the same interface, use the one that includes its parents.
    if (
      existing === undefined ||
      (relatedInterfaces(existing).length === 0 && related.length > 0)
    ) {
      definitions.set(iface.apiName, iface);
    }
    queue.push(...related);
  }
  return definitions;
}

function relatedInterfaces(iface: InterfaceType): InterfaceType[] {
  return [...(iface.linkedInterfaces ?? []), ...iface.extendsInterfaces].filter(
    (related): related is InterfaceType => typeof related !== "string",
  );
}
