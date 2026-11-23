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

import { createObservableClient } from "@osdk/client/observable";
import { modifyTestEschwartz } from "@osdk/e2e.generated.catchall";
import invariant from "tiny-invariant";

import { mjMainClient } from "./client.js";

// The generator does not emit action return types yet, so the typed results
// below do not include `returnValue`. The client reads the return type from
// the action metadata it fetches at runtime, so the value is still returned.
function getReturnValue(result: unknown): unknown {
  invariant(
    typeof result === "object" && result != null && "returnValue" in result,
    "Expected the action result to include a returnValue",
  );
  return result.returnValue;
}

export async function runActionReturnValuesTest(): Promise<void> {
  const params = { gpa: 3.5, age: 21, favFood: "pizza", graduated: false };

  const result: unknown =
    await mjMainClient(modifyTestEschwartz).applyAction(params);
  const returnValue = getReturnValue(result);
  console.log("applyAction returnValue:", returnValue);
  invariant(
    typeof returnValue === "number",
    `Expected a number returnValue, got ${typeof returnValue}`,
  );

  const resultWithEdits: unknown = await mjMainClient(
    modifyTestEschwartz,
  ).applyAction(params, { $returnEdits: true });
  console.log("applyAction with edits:", resultWithEdits);
  invariant(
    typeof getReturnValue(resultWithEdits) === "number",
    "Expected a number returnValue alongside the edits",
  );

  const observableClient = createObservableClient(mjMainClient);
  const observableResult: unknown = await observableClient.applyAction(
    modifyTestEschwartz,
    params,
  );
  console.log("ObservableClient applyAction result:", observableResult);
  invariant(
    typeof getReturnValue(observableResult) === "number",
    "Expected ObservableClient applyAction to include a number returnValue",
  );

  // batchApplyAction is not exercised: this action's function uses Ontology
  // transactions, which Foundry does not support in bulk mode.
}

void runActionReturnValuesTest();
