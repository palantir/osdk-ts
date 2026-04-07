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

import type { ObjectSet } from "@osdk/api";
import { getWireObjectSet } from "@osdk/client/unstable-do-not-use";

export function extractPayloadError(
  payload: { error?: Error; status?: string } | undefined | null,
  fallbackMessage: string,
): Error | undefined {
  if (payload && "error" in payload && payload.error) {
    return payload.error;
  }
  if (payload?.status === "error") {
    return new Error(fallbackMessage);
  }
  return undefined;
}

export function isPayloadLoading(
  payload: { status?: string } | undefined | null,
  enabled: boolean,
): boolean {
  if (!enabled) {
    return false;
  }
  return payload?.status === "loading" || payload?.status === "init"
    || !payload;
}

/**
 * Composes a base ObjectSet with hook options and returns the wire
 * representation. Available immediately — does not depend on loading state.
 */
export function composeWireObjectSet(
  baseObjectSet: ObjectSet<any> | undefined,
  options: {
    withProperties?: unknown;
    where?: unknown;
    union?: ReadonlyArray<ObjectSet<any>>;
    intersect?: ReadonlyArray<ObjectSet<any>>;
    subtract?: ReadonlyArray<ObjectSet<any>>;
    pivotTo?: string;
  },
): ReturnType<typeof getWireObjectSet> | undefined {
  if (baseObjectSet == null) {
    return undefined;
  }

  let result: ObjectSet<any> = baseObjectSet;

  if (options.withProperties) {
    result = result.withProperties(options.withProperties as any);
  }
  if (options.where) {
    result = result.where(options.where as any);
  }
  if (options.union && options.union.length > 0) {
    result = result.union(...options.union);
  }
  if (options.intersect && options.intersect.length > 0) {
    result = result.intersect(...options.intersect);
  }
  if (options.subtract && options.subtract.length > 0) {
    result = result.subtract(...options.subtract);
  }
  if (options.pivotTo) {
    result = result.pivotTo(options.pivotTo as any);
  }

  return getWireObjectSet(result);
}
