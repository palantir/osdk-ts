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

import type { QueryDefinition, QueryParameterDefinition } from "@osdk/api";
import type { QueryParameterV2, QueryTypeV2 } from "@osdk/gateway/types";
import { wireQueryDataTypeToQueryDataTypeDefinition } from "./wireQueryDataTypeToQueryDataTypeDefinition.js";

export function wireQueryTypeV2ToSdkQueryDefinition(
  input: QueryTypeV2,
): QueryDefinition<any, any> {
  return {
    apiName: input.apiName,
    description: input.description,
    displayName: input.displayName,
    version: input.version,
    parameters: Object.fromEntries(
      Object.entries(input.parameters).map((
        [name, parameter],
      ) => [name, wireQueryParameterV2ToQueryParameterDefinition(parameter)]),
    ),
    output: wireQueryDataTypeToQueryDataTypeDefinition(input.output),
  };
}

function wireQueryParameterV2ToQueryParameterDefinition(
  parameter: QueryParameterV2,
): QueryParameterDefinition<any> {
  return {
    description: parameter.description,
    ...wireQueryDataTypeToQueryDataTypeDefinition(parameter.dataType),
  };
}
