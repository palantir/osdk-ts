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

import type {
  ActionStatus,
  ActionType,
  BlueprintIcon,
  DefaultFormat,
  EntityPermission,
  SubmissionMetadata,
} from "@osdk/maker";
import { defineAction } from "@osdk/maker";

export type FunctionBackedActionTypeUserDefinition = {
  functionApiName: string;
  apiName?: string;
  displayName?: string;
  description?: string;
  status?: ActionStatus;
  defaultFormat?: DefaultFormat;
  enableLayoutSwitch?: boolean;
  submissionMetadata?: SubmissionMetadata;
  permission?: EntityPermission;
  icon?: { locator: BlueprintIcon; color: string };
};

export function defineFunctionBackedAction(
  def: FunctionBackedActionTypeUserDefinition,
): ActionType {
  return defineAction({
    apiName: def.apiName ?? `${def.functionApiName.toLowerCase()}-action`,
    displayName: def.displayName ?? `Function action ${def.functionApiName}`,
    description: def.description,
    rules: [
      {
        type: "functionRule",
        functionRule: {
          // delegate this to conversion step
          functionRid: def.functionApiName,
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
    ...(def.defaultFormat && { defaultFormat: def.defaultFormat }),
    ...(def.enableLayoutSwitch && {
      enableLayoutSwitch: def.enableLayoutSwitch,
    }),
    ...(def.submissionMetadata && {
      submissionMetadata: def.submissionMetadata,
    }),
    ...(def.permission && { permission: def.permission }),
    ...(def.icon && { icon: def.icon }),
  });
}
