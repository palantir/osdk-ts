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

import type {
  OntologyEntityRef,
  OntologyNodeUsage,
} from "@osdk/ontology-explorer-app/ontology-graph";
import { entityNodeId } from "@osdk/ontology-explorer-app/ontology-graph";

import type {
  ComponentHookBinding,
  ComponentQueryRegistry,
} from "../utils/ComponentQueryRegistry.js";

/**
 * Devtools-specific glue for the Ontology Graph tab: everything here bridges
 * {@link ComponentQueryRegistry} (fiber-discovered OSDK hook usage) to the
 * generic `@osdk/ontology-explorer-app/ontology-graph` model/components, which
 * know nothing about devtools concepts.
 */

/**
 * The object-type apiName a query references, if any. object/list/aggregation
 * queries carry an `objectType`; link traversals carry a `sourceObject` that is
 * itself a type apiName. action/objectSet queries reference no single type.
 */
function objectTypeOf(
  params: ComponentHookBinding["queryParams"]
): string | undefined {
  switch (params.type) {
    case "object":
    case "list":
    case "aggregation":
      return params.objectType;
    case "links":
      return params.sourceObject;
    default:
      return undefined;
  }
}

/** The action-type apiName an action query references, if any. */
function actionNameOf(
  params: ComponentHookBinding["queryParams"]
): string | undefined {
  return params.type === "action" ? params.actionName : undefined;
}

/**
 * Collects the distinct entities (object + action types) the app has referenced,
 * from the component/query registry, as refs the ontology graph model consumes.
 * Query types aren't tracked as hook usages, so they never appear in "Used".
 */
export function collectUsedEntities(
  registry: ComponentQueryRegistry
): OntologyEntityRef[] {
  const seen = new Set<string>();
  const refs: OntologyEntityRef[] = [];
  const add = (ref: OntologyEntityRef) => {
    const id = entityNodeId(ref);
    if (!seen.has(id)) {
      seen.add(id);
      refs.push(ref);
    }
  };
  for (const binding of registry.getAllBindings()) {
    const objectType = objectTypeOf(binding.queryParams);
    if (objectType && objectType !== "Unknown") {
      add({ kind: "object", apiName: objectType });
    }
    const actionName = actionNameOf(binding.queryParams);
    if (actionName && actionName !== "Unknown") {
      add({ kind: "action", apiName: actionName });
    }
  }
  return refs;
}

export function usagesForType(
  bindings: ComponentHookBinding[],
  apiName: string
): ComponentHookBinding[] {
  return bindings.filter(
    (binding) =>
      !binding.unmountedAt &&
      (objectTypeOf(binding.queryParams) === apiName ||
        actionNameOf(binding.queryParams) === apiName)
  );
}

function shortFilePath(filePath: string | undefined): string | undefined {
  if (!filePath) {
    return undefined;
  }
  const withoutQuery = filePath.split("?")[0];
  const parts = withoutQuery.split("/");
  return parts.slice(-2).join("/");
}

/** Maps devtools component bindings to the generic usage shape the moved detail panel renders. */
export function toOntologyNodeUsages(
  bindings: ComponentHookBinding[]
): OntologyNodeUsage[] {
  return bindings.map((binding) => ({
    key: binding.componentId + binding.hookType,
    label: binding.componentDisplayName ?? binding.componentName,
    detail: [binding.hookType, shortFilePath(binding.filePath)]
      .filter(Boolean)
      .join(" · "),
    // full path on hover; the panel shortens `detail` to the last 2 segments
    detailTitle: binding.filePath,
  }));
}
