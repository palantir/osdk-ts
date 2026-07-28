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

import deepEqual from "fast-deep-equal";
import { useRef } from "react";

/**
 * Returns a Map whose per-key values keep their previous reference when their
 * contents are structurally equal to the prior frame. Lets memoized children
 * keyed off individual entries skip work when only sibling entries changed.
 */
export function useStableMapEntries<K, V>(input: Map<K, V>): Map<K, V> {
  const ref = useRef<Map<K, V>>(new Map());
  const next = new Map<K, V>();
  for (const [key, value] of input) {
    const prev = ref.current.get(key);
    next.set(key, prev !== undefined && deepEqual(prev, value) ? prev : value);
  }
  ref.current = next;
  return next;
}
