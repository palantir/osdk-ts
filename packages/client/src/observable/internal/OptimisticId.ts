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

interface OptimisticIdFactory {
  (): OptimisticId;
  counter?: number;
}

export interface OptimisticId {
  __optimisticId: object | string | number;
}

export function createOptimisticId(): OptimisticId {
  if (process.env.NODE_ENV !== "production") {
    if ((createOptimisticId as OptimisticIdFactory).counter === undefined) {
      (createOptimisticId as OptimisticIdFactory).counter = 0;
    }
    return {
      __optimisticId: (createOptimisticId as OptimisticIdFactory)
        .counter!++,
    };
  }

  // in production we can just use the lightest empty object possible
  return Object.create(null);
}
