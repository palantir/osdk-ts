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

// Applies the action once without `$returnEdits`. This action's backing
// function fails when edits are requested, and it uses Ontology
// transactions, so it cannot be batched.
export async function runActionReturnValuesTest(): Promise<void> {
  const result: unknown = await mjMainClient(modifyTestEschwartz).applyAction({
    gpa: 3.5,
    age: 21,
    favFood: "pizza",
    graduated: false,
  });
  console.log("applyAction result:", result);

  const returnValue = getReturnValue(result);
  invariant(
    typeof returnValue === "number",
    `Expected a number returnValue, got ${typeof returnValue}`,
  );
}

void runActionReturnValuesTest();
