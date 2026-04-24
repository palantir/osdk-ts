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

import type { ObjectSet as WireObjectSet } from "@osdk/foundry.ontologies";
import type { WireDerivedProperties } from "../RdpCanonicalizer.js";

/**
 * Builds a wire ObjectSet for aggregation invalidation-type computation.
 *
 * When derived properties are configured, wraps the base (or caller-provided)
 * object set in a `withProperties` node so the shared
 * `getObjectTypesThatInvalidate` walker can trace RDP-referenced object types.
 *
 * Returns `undefined` when no object set was provided and no derived
 * properties are configured — callers can skip invalidation computation in
 * that case because the base `apiName` alone is sufficient.
 */
export function buildAggregationInvalidationWireObjectSet(
  apiName: string,
  parsedWireObjectSet: WireObjectSet | undefined,
  wireDerivedProperties: WireDerivedProperties | undefined,
): WireObjectSet | undefined {
  const hasRdps = wireDerivedProperties != null
    && Object.keys(wireDerivedProperties).length > 0;

  if (!hasRdps) {
    return parsedWireObjectSet;
  }

  const inner: WireObjectSet = parsedWireObjectSet ?? {
    type: "base",
    objectType: apiName,
  };

  return {
    type: "withProperties",
    objectSet: inner,
    derivedProperties: wireDerivedProperties,
  };
}
