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

import type { ComponentHookBinding } from "../utils/ComponentQueryRegistry.js";

export function deriveComponentName(
  bindings: ComponentHookBinding[],
): string | null {
  const objectTypes = new Set<string>();
  const actionNames = new Set<string>();

  for (const binding of bindings) {
    const params = binding.queryParams;
    if (params.type === "object" || params.type === "list") {
      objectTypes.add(params.objectType);
    } else if (params.type === "action") {
      actionNames.add(params.actionName);
    } else if (params.type === "links") {
      const sourceType = params.sourceObject.split(":")[0];
      if (sourceType) {
        objectTypes.add(sourceType);
      }
    }
  }

  const parts: string[] = [];

  if (objectTypes.size > 0) {
    const types = Array.from(objectTypes).slice(0, 2);
    parts.push(types.join(", "));
    if (objectTypes.size > 2) {
      parts[parts.length - 1] += ` +${objectTypes.size - 2}`;
    }
  }

  if (actionNames.size > 0) {
    const actions = Array.from(actionNames).slice(0, 2);
    parts.push(`Actions: ${actions.join(", ")}`);
  }

  if (parts.length === 0) {
    return null;
  }

  return parts.join(" | ");
}

export function resolveComponentName(
  bindings: ComponentHookBinding[],
): string {
  if (bindings.length === 0) {
    return "Anonymous";
  }

  const firstBinding = bindings[0];
  return firstBinding.componentDisplayName
    || (firstBinding.componentName !== "Unknown"
      ? firstBinding.componentName
      : null)
    || deriveComponentName(bindings)
    || "Anonymous";
}
