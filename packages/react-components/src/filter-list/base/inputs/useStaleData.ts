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

import { useRef } from "react";

// TODO: revisit whether this hook is necessary. It may be possible to handle
// loading states inline (render data if present, show skeleton if loading)
// instead of preserving stale data in a ref.
export function useStaleData<T>(data: T, isLoading: boolean): T {
  const ref = useRef(data);
  if (!isLoading) {
    ref.current = data;
  }
  return ref.current;
}
