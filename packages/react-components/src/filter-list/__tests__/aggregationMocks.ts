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

import { useOsdkAggregation } from "@osdk/react";
import { vi } from "vitest";

/**
 * Scripts `useOsdkAggregation` to return per-bucket group data based on the
 * `_kind` tag carried on the call's `objectSet`. Buckets without an entry in
 * `map` resolve to a loading/empty response.
 */
export function mockAggregationByObjectSetKind(map: {
  [kind: string]: Array<{ name: string; count: number }>;
}): void {
  vi.mocked(useOsdkAggregation).mockImplementation((_objType, args) => {
    const kind = (args as { objectSet?: { _kind?: string } }).objectSet?._kind;
    const groups = kind != null ? map[kind] : undefined;
    if (!groups) {
      return {
        data: undefined,
        isLoading: false,
        error: null,
        refetch: vi.fn(),
      } as unknown as ReturnType<typeof useOsdkAggregation>;
    }
    return {
      data: groups.map((g) => ({ $group: { name: g.name }, $count: g.count })),
      isLoading: false,
      error: null,
      refetch: vi.fn(),
    } as unknown as ReturnType<typeof useOsdkAggregation>;
  });
}
