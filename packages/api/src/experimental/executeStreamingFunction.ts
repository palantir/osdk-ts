/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

type StreamingArgs<QD extends QueryDefinition<any>> =
  CompileTimeMetadata<QD>["signature"] extends (...args: infer A) => any ? A
    : never[];

type StreamingElement<QD extends QueryDefinition<any>> =
  CompileTimeMetadata<QD>["signature"] extends
    (...args: any[]) => Promise<infer R>
    ? R extends ReadonlyArray<infer E> ? E : R
    : never;

/**
 * @experimental This feature is experimental and might change in the future.
 *
 * Executes a query as a streaming function, yielding results as they arrive
 * from the server over an NDJSON stream. For queries that return arrays, the
 * stream yields the element type — batches are flattened automatically.
 */
type executeStreamingFunctionFn = <QD extends QueryDefinition<any>>(
  query: QD,
  ...args: StreamingArgs<QD>
) => AsyncIterable<StreamingElement<QD>>;

export const __EXPERIMENTAL__NOT_SUPPORTED_YET__executeStreamingFunction:
  Experiment<
    "2.19.0",
    "__EXPERIMENTAL__NOT_SUPPORTED_YET__executeStreamingFunction",
    { executeStreamingFunction: executeStreamingFunctionFn }
  > = {
    name: "__EXPERIMENTAL__NOT_SUPPORTED_YET__executeStreamingFunction",
    type: "experiment",
    version: "2.19.0",
  };
