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

import type {
  InterfaceDefinition,
  ObjectTypeDefinition,
  PrimaryKeyType,
} from "@osdk/api";
import type {
  ObserveListOptions,
  ObserveObjectOptions,
} from "@osdk/client/unstable-do-not-use";
import React from "react";
import { OsdkContext2 } from "./OsdkContext2.js";

export interface PrefetchQuery {
  type: "list" | "object";
  options: ObserveListOptions<ObjectTypeDefinition | InterfaceDefinition> | {
    apiName: ObjectTypeDefinition["apiName"] | ObjectTypeDefinition;
    pk: PrimaryKeyType<ObjectTypeDefinition>;
    mode?: "offline" | "force";
    select?: string[];
  };
}

export interface UsePrefetchResult {
  prefetchList: <T extends ObjectTypeDefinition | InterfaceDefinition>(
    options: ObserveListOptions<T>,
  ) => Promise<void>;

  prefetchObject: <T extends ObjectTypeDefinition>(
    apiName: T["apiName"] | T,
    pk: PrimaryKeyType<T>,
    options?: Omit<ObserveObjectOptions<T>, "apiName" | "pk">,
  ) => Promise<void>;

  prefetchMultiple: (queries: PrefetchQuery[]) => Promise<void>;
}

/**
 * Hook for imperative data prefetching.
 *
 * @returns Object with prefetch methods
 *
 * @example
 * ```tsx
 * function TodoApp() {
 *   const prefetch = usePrefetch();
 *
 *   // Prefetch on hover
 *   return (
 *     <Link
 *       to="/todos"
 *       onMouseEnter={() => {
 *         prefetch.prefetchList({
 *           type: Todo,
 *           where: { isComplete: false }
 *         });
 *       }}
 *     >
 *       View Todos
 *     </Link>
 *   );
 * }
 * ```
 */
export function usePrefetch(): UsePrefetchResult {
  const { observableClient } = React.useContext(OsdkContext2);

  return React.useMemo(
    () => ({
      prefetchList: observableClient.prefetchList.bind(observableClient),
      prefetchObject: observableClient.prefetchObject.bind(observableClient),

      prefetchMultiple: async (queries: PrefetchQuery[]) => {
        await Promise.all(
          queries.map((query) => {
            if (query.type === "object") {
              const objectOptions = query.options as {
                apiName: ObjectTypeDefinition["apiName"] | ObjectTypeDefinition;
                pk: PrimaryKeyType<ObjectTypeDefinition>;
                mode?: "offline" | "force";
                select?: string[];
              };
              return observableClient.prefetchObject(
                objectOptions.apiName,
                objectOptions.pk,
                objectOptions.mode || objectOptions.select
                  ? { mode: objectOptions.mode, select: objectOptions.select }
                  : undefined,
              );
            } else {
              return observableClient.prefetchList(
                query.options as ObserveListOptions<
                  ObjectTypeDefinition | InterfaceDefinition
                >,
              );
            }
          }),
        );
      },
    }),
    [observableClient],
  );
}
