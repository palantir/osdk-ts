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

import type { CompileTimeMetadata } from "../ontology/ObjectTypeDefinition.js";
import type { QueryDefinition } from "../ontology/QueryDefinition.js";
import type { Experiment } from "./Experiment.js";

/** @beta */
export type FunctionExecutionResult<T> =
  | { type: "running" }
  | { type: "succeeded"; value: T };

/**
 * An in-memory handle to an asynchronous function execution.
 * @beta
 */
export interface FunctionExecution<T> {
  /** The opaque execution ID, or undefined if the function completed during submission. */
  readonly executionId: string | undefined;

  /**
   * Checks for the result once. Successful results are cached on this handle.
   * Rejects if the function failed or the execution was canceled.
   */
  getResult(options?: {
    /** Maximum seconds to wait, from zero (the default) to 280. Larger values are capped at 280. */
    $timeoutSeconds?: number;
  }): Promise<FunctionExecutionResult<T>>;

  /** Requests cancellation. Resolves immediately if the handle has already received the result. */
  cancel(): Promise<void>;
}

type AsyncQuery = QueryDefinition<(...args: never[]) => Promise<unknown>>;

type QuerySignature<Q extends AsyncQuery> = CompileTimeMetadata<Q>["signature"];

type ExecuteFunctionAsync = <Q extends AsyncQuery>(
  query: Q,
  // Match executeFunction's uncallable signature for legacy definitions without metadata.
  ...args: [QuerySignature<Q>] extends [never]
    ? [params: never]
    : Parameters<QuerySignature<Q>>
) => Promise<FunctionExecution<Awaited<ReturnType<QuerySignature<Q>>>>>;

/**
 * Submits a query using the private-beta Functions API. Requires the
 * `api:ontologies-read` and `api:functions-execute` OAuth scopes.
 * Some functions complete during submission. Scenario clients are unsupported.
 * On the default branch, use an unpinned query or an exact version.
 * @example
 * ```ts
 * const { executeFunctionAsync } = client(__EXPERIMENTAL__NOT_SUPPORTED_YET__executeFunctionAsync);
 * const execution = await executeFunctionAsync(generateReport, { year: 2025 });
 * const result = await execution.getResult({ $timeoutSeconds: 30 });
 * ```
 * @experimental
 */
export const __EXPERIMENTAL__NOT_SUPPORTED_YET__executeFunctionAsync: Experiment<
  "2.95.0",
  "__EXPERIMENTAL__NOT_SUPPORTED_YET__executeFunctionAsync",
  { executeFunctionAsync: ExecuteFunctionAsync }
> = {
  name: "__EXPERIMENTAL__NOT_SUPPORTED_YET__executeFunctionAsync",
  type: "experiment",
  version: "2.95.0",
};
