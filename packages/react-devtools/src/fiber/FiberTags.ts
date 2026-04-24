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

import type { Fiber } from "./types.js";

export const FIBER_TAG = {
  FUNCTION_COMPONENT: 0,
  CLASS_COMPONENT: 1,
  INDETERMINATE_COMPONENT: 2,
  HOST_ROOT: 3,
  HOST_PORTAL: 4,
  HOST_ELEMENT: 5,
  HOST_TEXT: 6,
  FRAGMENT: 7,
  MODE: 8,
  CONTEXT_CONSUMER: 9,
  CONTEXT_PROVIDER: 10,
  FORWARD_REF: 11,
  PROFILER: 12,
  SUSPENSE: 13,
  MEMO: 14,
  SIMPLE_MEMO: 15,
  LAZY: 16,
  INCOMPLETE_CLASS: 17,
  DEHYDRATED_FRAGMENT: 18,
  SUSPENSE_LIST: 19,
  SCOPE: 21,
  OFFSCREEN: 22,
  LEGACY_HIDDEN: 23,
  CACHE: 24,
  TRACING_MARKER: 25,
  HOST_HOISTABLE: 26,
  HOST_SINGLETON: 27,
  ACTIVITY: 28,
  VIEW_TRANSITION: 30,
} as const;

export function isUserComponent(fiber: Fiber): boolean {
  const tag = fiber.tag;
  return (
    tag === FIBER_TAG.FUNCTION_COMPONENT
    || tag === FIBER_TAG.CLASS_COMPONENT
    || tag === FIBER_TAG.FORWARD_REF
    || tag === FIBER_TAG.MEMO
    || tag === FIBER_TAG.SIMPLE_MEMO
    || tag === FIBER_TAG.LAZY
  );
}
