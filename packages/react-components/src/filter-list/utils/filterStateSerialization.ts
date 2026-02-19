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

import type { FilterState } from "../FilterListItemApi.js";

const DATE_PREFIX = "__date__:";

function replacer(_key: string, value: unknown): unknown {
  if (value instanceof Date) {
    return DATE_PREFIX + value.toISOString();
  }
  return value;
}

function reviver(_key: string, value: unknown): unknown {
  if (typeof value === "string" && value.startsWith(DATE_PREFIX)) {
    return new Date(value.slice(DATE_PREFIX.length));
  }
  return value;
}

export function serializeFilterStates(
  states: Map<string, FilterState>,
): string {
  const entries = Array.from(states.entries());
  return JSON.stringify(entries, replacer);
}

export function deserializeFilterStates(
  json: string,
): Map<string, FilterState> {
  const entries: Array<[string, FilterState]> = JSON.parse(json, reviver);
  return new Map(entries);
}
