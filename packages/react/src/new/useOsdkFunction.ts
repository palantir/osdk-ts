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
  CompileTimeMetadata,
  ObjectSet,
  ObjectTypeDefinition,
  Osdk,
  QueryDefinition,
} from "@osdk/api";
import type {
  ObserveFunctionCallbackArgs,
  QueryParameterType,
} from "@osdk/client/unstable-do-not-use";
import { getWireObjectSet } from "@osdk/client/unstable-do-not-use";
import React from "react";
import { makeExternalStore } from "./makeExternalStore.js";
import { OsdkContext2 } from "./OsdkContext2.js";

export interface UseOsdkFunctionOptions<Q extends QueryDefinition<unknown>> {
  /**
   * Parameters to pass to the function.
   * Must include all required parameters; optional parameters can be omitted.
   */
  params?: CompileTimeMetadata<Q>["parameters"] extends Record<string, never>
    ? undefined
    : QueryParameterType<CompileTimeMetadata<Q>["parameters"]>;

  /**
   * Object types this function depends on.
   * When actions modify objects of these types, the function will automatically refetch.
   *
   * @example
   * ```tsx
   * // Refetch when any Employee object changes
   * { dependsOn: [Employee] }
   * ```
   */
  dependsOn?: Array<ObjectTypeDefinition | string>;

  /**
   * Specific object instances or ObjectSets this function depends on.
   * When any of these specific objects change, the function will refetch.
   * More fine-grained than dependsOn for precise invalidation control.
   *
   * For ObjectSets, the object type is extracted asynchronously and changes
   * to any object of that type will trigger a refetch.
   *
   * @example
   * ```tsx
   * // Refetch when this specific employee changes
   * { dependsOnObjects: [employee] }
   *
   * // Refetch when any object in the ObjectSet's type changes
   * { dependsOnObjects: [employeeObjectSet] }
   * ```
   */
  dependsOnObjects?: Array<
    Osdk.Instance<ObjectTypeDefinition> | ObjectSet<ObjectTypeDefinition>
  >;

  /**
   * The number of milliseconds to dedupe identical function calls.
   * Two calls with the same function and params will share results
   * if the second call is within this interval of the first.
   * @default 2000
   */
  dedupeIntervalMs?: number;

  /**
   * Whether to enable the query. When false, the query will not execute.
   * Useful for:
   * - Dependent queries that need to wait for other data
   * - Conditional queries based on component state
   *
   * @default true
   * @example
   * // Dependent query - wait for required data
   * const { data: employee } = useOsdkObject(Employee, employeeId);
   * const { data: report } = useOsdkFunction(getEmployeeReport, {
   *   params: { employeeId: employee?.$primaryKey },
   *   enabled: !!employee
   * });
   */
  enabled?: boolean;
}

export interface UseOsdkFunctionResult<Q extends QueryDefinition<unknown>> {
  /**
   * The function result, or undefined if not yet loaded or on error.
   */
  data:
    | (CompileTimeMetadata<Q>["signature"] extends (...args: never[]) => infer R
      ? Awaited<R>
      : never)
    | undefined;

  /**
   * True while the function is executing.
   */
  isLoading: boolean;

  /**
   * Error if the function execution failed.
   */
  error: Error | undefined;

  /**
   * Timestamp (ms since epoch) of when the result was last fetched.
   */
  lastUpdated: number;

  /**
   * Manually refetch the function.
   * Useful for "pull to refresh" or retry patterns.
   */
  refetch: () => void;
}

declare const process: {
  env: {
    NODE_ENV: "development" | "production";
  };
};

/**
 * React hook for executing and observing OSDK functions.
 *
 * Provides automatic caching, deduplication, and reactive updates for function calls.
 * Functions are automatically re-fetched when dependencies change (configured via options).
 *
 * @param queryDef - The QueryDefinition to execute
 * @param options - Configuration options for the function call
 * @returns Object containing result, loading state, error, and refetch function
 *
 * @example Basic usage
 * ```tsx
 * const { data, isLoading, error } = useOsdkFunction(getEmployeeStats, {
 *   params: { departmentId: "engineering" }
 * });
 * ```
 *
 * @example With dependency tracking
 * ```tsx
 * const { data, refetch } = useOsdkFunction(calculateMetrics, {
 *   params: { startDate, endDate },
 *   dependsOn: [Employee, Project],
 * });
 * ```
 *
 * @example With specific object dependencies
 * ```tsx
 * const { data } = useOsdkFunction(getEmployeeReport, {
 *   params: { employeeId: employee.$primaryKey },
 *   dependsOnObjects: [employee],
 * });
 * ```
 */
export function useOsdkFunction<Q extends QueryDefinition<unknown>>(
  queryDef: Q,
  options: UseOsdkFunctionOptions<Q> = {},
): UseOsdkFunctionResult<Q> {
  const { observableClient } = React.useContext(OsdkContext2);
  const {
    params,
    dependsOn,
    dependsOnObjects,
    dedupeIntervalMs,
    enabled = true,
  } = options;

  const stableParams = React.useMemo(
    () => params,
    [JSON.stringify(params)],
  );
  const stableDependsOn = React.useMemo(
    () => dependsOn,
    [JSON.stringify(
      dependsOn?.map(d => typeof d === "string" ? d : d.apiName),
    )],
  );
  const stableDependsOnObjects = React.useMemo(
    () => dependsOnObjects,
    [JSON.stringify(
      dependsOnObjects?.map(item =>
        "$apiName" in item
          ? { $apiName: item.$apiName, $primaryKey: item.$primaryKey }
          : { __objectSet: getWireObjectSet(item) }
      ),
    )],
  );

  // Record<string, unknown> required as typing is figured out at runtime
  const paramsForApi = stableParams as Record<string, unknown> | undefined;

  const { subscribe, getSnapShot } = React.useMemo(
    () => {
      if (!enabled) {
        return makeExternalStore<ObserveFunctionCallbackArgs<Q>>(
          () => ({ unsubscribe: () => {} }),
          process.env.NODE_ENV !== "production"
            ? `function ${queryDef.apiName} ${
              JSON.stringify(stableParams)
            } [DISABLED]`
            : void 0,
        );
      }
      return makeExternalStore<ObserveFunctionCallbackArgs<Q>>(
        (observer) =>
          observableClient.observeFunction(
            queryDef,
            paramsForApi,
            {
              dependsOn: stableDependsOn,
              dependsOnObjects: stableDependsOnObjects,
              dedupeInterval: dedupeIntervalMs ?? 2_000,
            },
            observer,
          ),
        process.env.NODE_ENV !== "production"
          ? `function ${queryDef.apiName} ${JSON.stringify(stableParams)}`
          : void 0,
      );
    },
    [
      observableClient,
      queryDef.apiName,
      queryDef.version,
      paramsForApi,
      stableDependsOn,
      stableDependsOnObjects,
      dedupeIntervalMs,
      enabled,
    ],
  );

  const payload = React.useSyncExternalStore(subscribe, getSnapShot);

  const error = payload?.error
    ?? (payload?.status === "error"
      ? new Error("Failed to execute function")
      : undefined);

  const refetch = React.useCallback(() => {
    void observableClient.invalidateFunction(queryDef, paramsForApi);
  }, [observableClient, queryDef, paramsForApi]);

  return {
    data: payload?.result as UseOsdkFunctionResult<Q>["data"],
    isLoading: payload?.status === "loading",
    error,
    lastUpdated: payload?.lastUpdated ?? 0,
    refetch,
  };
}
