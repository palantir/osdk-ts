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

import type { ActionStatus, ActionType } from "@osdk/maker";
import { defineAction, getNamespace } from "@osdk/maker";
import { functionRefSchema, type FunctionRef } from "@osdk/resource";

export type FunctionBackedActionTypeUserDefinition = (
  | { functionApiName: string; function?: never }
  | { function: FunctionRef; functionApiName?: never }
) & {
  apiName?: string;
  displayName?: string;
  description?: string;
  status?: ActionStatus;
};

export function defineFunctionBackedAction(
  def: FunctionBackedActionTypeUserDefinition,
): ActionType {
  let functionApiName: string;
  if (def.function !== undefined) {
    if (def.functionApiName !== undefined) {
      throw new Error("Specify either function or functionApiName, not both");
    }
    const { locator } = functionRefSchema.parse(def.function);
    if (locator.type !== "apiName") {
      throw new Error(
        "Function-backed actions require an API-name reference to a discovered function; RID references are not supported",
      );
    }
    if (
      locator.namespace !== undefined &&
      locator.namespace !== getNamespace().replace(/\.$/u, "")
    ) {
      throw new Error(
        `Function namespace "${locator.namespace}" is outside the current ontology namespace`,
      );
    }
    functionApiName = locator.apiName;
  } else {
    functionApiName = def.functionApiName;
  }
  return defineAction({
    apiName: def.apiName ?? `${functionApiName.toLowerCase()}-action`,
    displayName: def.displayName ?? `Function action ${functionApiName}`,
    description: def.description,
    rules: [
      {
        type: "functionRule",
        functionRule: {
          // delegate this to conversion step
          functionRid: functionApiName,
          functionInputValues: {},
          functionVersion: "0.1.0",
        },
      },
    ],
    status: def.status ?? "active",
    ...{
      validation: [
        {
          condition: {
            type: "true",
            true: {},
          },
          displayMetadata: {
            failureMessage: "Validation failed",
            typeClasses: [],
          },
        },
      ],
    },
  });
}
