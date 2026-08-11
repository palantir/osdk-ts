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

import type { OntologyIrStructFieldBaseParameterType } from "@osdk/client.unstable";
import type { ActionParameter } from "@osdk/maker";

export function getStructFieldTypes(
  parameter: ActionParameter,
): Record<string, OntologyIrStructFieldBaseParameterType> | undefined {
  if (typeof parameter.type === "string") {
    return undefined;
  }
  switch (parameter.type.type) {
    case "struct":
      return parameter.type.struct.structFieldTypes;
    case "structList":
      return parameter.type.structList.structFieldTypes;
    default:
      return undefined;
  }
}
