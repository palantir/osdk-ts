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

import type { UnusedProperty, WastedRender } from "../../types/index.js";
import type {
  ComponentHookBinding,
  QueryParams,
} from "../../utils/ComponentQueryRegistry.js";
import type { PropertyAccessEvent } from "../../utils/PropertyAccessTracker.js";

/** The object type a query reads from, or null for actions (shown by name). */
export function objectTypeOf(params: QueryParams): string | null {
  switch (params.type) {
    case "object":
    case "list":
    case "aggregation": {
      return params.objectType;
    }
    case "links": {
      // sourceObject may be "Type" or "Type:primaryKey" depending on capture path.
      return params.sourceObject.split(":")[0] || params.sourceObject;
    }
    case "objectSet": {
      return params.baseObjectSet;
    }
    default: {
      return null;
    }
  }
}

export interface OntologyObjectType {
  /** Object type api name, e.g. "Parcel". */
  name: string;
  /** Distinct primary keys of instances the component actually read. */
  instances: string[];
}

export interface OntologyProperties {
  objectType: string;
  names: string[];
}

export interface ComponentOntology {
  /** Object types the component reads, inferred from hook usage. */
  objectTypes: OntologyObjectType[];
  /** Action names the component invokes, inferred from hook usage. */
  actions: string[];
  /** Properties the component read, grouped by object type. */
  properties: OntologyProperties[];
  /** React props captured from the fiber. */
  reactProps: Array<[string, string]>;
  /** True when the component has no wasted renders and no over-fetch. */
  healthy: boolean;
  /** Short human label describing the health warning, when not healthy. */
  warning?: string;
}

export interface ComponentInsight {
  wasted?: WastedRender;
  unused?: UnusedProperty[];
}

/** Split an access `objectKey` ("Parcel:123" or nested "Parcel:123.owner"). */
function parseObjectKey(
  objectKey: string
): { objectType: string; primaryKey: string } | null {
  const colon = objectKey.indexOf(":");
  if (colon <= 0) {
    return null;
  }
  const objectType = objectKey.slice(0, colon);
  // Nested proxy keys append ".<prop>"; the instance identity is the first segment.
  const primaryKey = objectKey.slice(colon + 1).split(".")[0];
  if (primaryKey.length === 0) {
    return null;
  }
  return { objectType, primaryKey };
}

const isKnown = (type: string | null): type is string =>
  type != null && type !== "Unknown";

/**
 * Reduce a component's hook bindings, property access, props, and health signals
 * into the ontology tree the Components tab renders: the object types and actions
 * it uses, the instances and properties it read, and its React props.
 */
export function deriveComponentOntology(
  bindings: ComponentHookBinding[],
  accesses: PropertyAccessEvent[],
  props: Record<string, string> | undefined,
  insight: ComponentInsight
): ComponentOntology {
  const objectTypeNames = new Set<string>();
  const actionNames = new Set<string>();

  for (const binding of bindings) {
    if (binding.queryParams.type === "action") {
      const name = binding.queryParams.actionName;
      if (isKnown(name)) {
        actionNames.add(name);
      }
      continue;
    }
    const type = objectTypeOf(binding.queryParams);
    if (isKnown(type)) {
      objectTypeNames.add(type);
    }
  }

  const instancesByType = new Map<string, Set<string>>();
  const propertiesByType = new Map<string, Set<string>>();

  for (const access of accesses) {
    const parsed = parseObjectKey(access.objectKey);
    if (parsed == null) {
      continue;
    }
    const { objectType, primaryKey } = parsed;

    let instanceSet = instancesByType.get(objectType);
    if (instanceSet === undefined) {
      instanceSet = new Set<string>();
      instancesByType.set(objectType, instanceSet);
    }
    instanceSet.add(primaryKey);

    let propSet = propertiesByType.get(objectType);
    if (propSet === undefined) {
      propSet = new Set<string>();
      propertiesByType.set(objectType, propSet);
    }
    propSet.add(access.property);
  }

  // Object types come from hook usage; instances layer in from what was read.
  const objectTypes: OntologyObjectType[] = [...objectTypeNames]
    .sort((a, b) => a.localeCompare(b))
    .map((name) => ({
      name,
      instances: [...(instancesByType.get(name) ?? [])].sort((a, b) =>
        a.localeCompare(b)
      ),
    }));

  const properties: OntologyProperties[] = [...propertiesByType.entries()]
    .filter(([, names]) => names.size > 0)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([objectType, names]) => ({
      objectType,
      names: [...names].sort((a, b) => a.localeCompare(b)),
    }));

  const wastedCount = insight.wasted?.count ?? 0;
  const overFetchCount = insight.unused?.length ?? 0;
  const healthy = wastedCount === 0 && overFetchCount === 0;

  let warning: string | undefined;
  if (!healthy) {
    const parts: string[] = [];
    if (wastedCount > 0) {
      parts.push(`${wastedCount} wasted`);
    }
    if (overFetchCount > 0) {
      parts.push(`over-fetch ${overFetchCount}`);
    }
    warning = parts.join(" · ");
  }

  return {
    objectTypes,
    actions: [...actionNames].sort((a, b) => a.localeCompare(b)),
    properties,
    reactProps: props ? Object.entries(props) : [],
    healthy,
    warning,
  };
}
