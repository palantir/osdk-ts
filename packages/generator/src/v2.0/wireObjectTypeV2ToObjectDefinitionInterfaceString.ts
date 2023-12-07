/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import type { ObjectTypeV2 } from "@osdk/gateway/types";

export function wireObjectTypeV2ToObjectDefinitionInterfaceString(
  input: ObjectTypeV2,
) {
  return `
    export interface ${input.apiName} extends ObjectTypeDefinition<"${input.apiName}", "${input.apiName}">{
      apiName: "${input.apiName}";
      properties: {
        ${
    Object.entries(input.properties).map(([key, value]) => `
      /**
       * ${value.description ?? ""}
       **/
      ${key}: {
          type: "${value.dataType.type}";
          displayName: "${value.displayName ?? key}";
        }
        
        `)
  }
      }
    }
  `;
}
