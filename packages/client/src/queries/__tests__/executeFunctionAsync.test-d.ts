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

import {
  __EXPERIMENTAL__NOT_SUPPORTED_YET__executeFunctionAsync,
  type FunctionExecution,
} from "@osdk/api/unstable";
import {
  queryTypeReturnsArrayOfObjects,
  returnsDate,
} from "@osdk/client.test.ontology";
import { expectTypeOf } from "vitest";

import type { Client, QueryDefinition } from "../../index.js";

declare const client: Client;
const { executeFunctionAsync } = client(
  __EXPERIMENTAL__NOT_SUPPORTED_YET__executeFunctionAsync,
);
// @ts-expect-error Async execution requires the experiment.
void client(queryTypeReturnsArrayOfObjects).executeFunctionAsync;
const execution = await executeFunctionAsync(queryTypeReturnsArrayOfObjects, {
  people: ["Alice"],
});
const result = await execution.getResult({ $timeoutSeconds: 30 });
if (result.type === "succeeded") {
  expectTypeOf(
    result.value,
  ).toEqualTypeOf<queryTypeReturnsArrayOfObjects.ReturnType>();
}

// @ts-expect-error The generated parameter accepts strings.
void executeFunctionAsync(queryTypeReturnsArrayOfObjects, { people: [42] });

expectTypeOf(executeFunctionAsync(returnsDate)).toEqualTypeOf<
  Promise<FunctionExecution<string>>
>();

declare const legacyQuery: QueryDefinition<never> & {
  __DefinitionMetadata?: never;
};
expectTypeOf(executeFunctionAsync<typeof legacyQuery>).toEqualTypeOf<
  (
    query: typeof legacyQuery,
    params: never,
  ) => Promise<FunctionExecution<never>>
>();
