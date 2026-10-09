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

import type { DerivedPropertyLinkTypeSide } from "@osdk/client.unstable";
import invariant from "tiny-invariant";

import type { DerivedPropertiesLinkDefinition } from "./ObjectTypeDatasourceDefinition.js";

export function resolveDerivedPropertyLinks(
  objectTypeApiName: string,
  linkDefinition: Array<DerivedPropertiesLinkDefinition>,
): {
  steps: Array<
    DerivedPropertiesLinkDefinition & { side: DerivedPropertyLinkTypeSide }
  >;
  targetObjectApiName: string;
} {
  invariant(
    linkDefinition.length > 0,
    `Derived datasource for object '${objectTypeApiName}' must have at least one link.`,
  );
  let currentObjectApiName = objectTypeApiName;
  const steps = linkDefinition.map((step) => {
    const link = step.linkType;
    const sourceObject = "one" in link ? link.one.object : link.many.object;
    const targetObject = link.toMany.object;
    const sourceApiName =
      typeof sourceObject === "string" ? sourceObject : sourceObject.apiName;
    const targetApiName =
      typeof targetObject === "string" ? targetObject : targetObject.apiName;
    // Preserve SOURCE as the default for self-links, where either side matches.
    const side =
      step.side ??
      (currentObjectApiName === sourceApiName ? "SOURCE" : "TARGET");
    const startingObjectApiName =
      side === "SOURCE" ? sourceApiName : targetApiName;
    invariant(
      startingObjectApiName === currentObjectApiName,
      `Link type '${link.apiName}' in derived datasource for object '${objectTypeApiName}' cannot be traversed from object '${currentObjectApiName}' using side '${side}'.`,
    );
    currentObjectApiName = side === "SOURCE" ? targetApiName : sourceApiName;
    return { ...step, side };
  });
  return { steps, targetObjectApiName: currentObjectApiName };
}
