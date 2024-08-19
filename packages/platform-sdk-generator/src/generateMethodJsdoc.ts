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

import { getCleanedUpJsdoc } from "./getCleanedUpJsdoc.js";
import type * as ir from "./ir/index.js";
import type { StaticOperation } from "./model/StaticOperation.js";

export async function generateMethodJsdoc(
  method: StaticOperation,
) {
  return `/**
  * ${await getCleanedUpJsdoc(method.documentation)}
  * 
  * ${jsdocTagForReleaseStage(method.spec.releaseStage)}
  * 
  * Required Scopes: [${method.auth.scopes.join(", ")}]
  * ${true ? `URL: ${method.path}` : ``}
  */`;
}

function jsdocTagForReleaseStage(
  releaseStage: ir.StaticOperation["releaseStage"],
) {
  switch (releaseStage) {
    case "PRIVATE_BETA":
      return "@alpha";
    case "PUBLIC_BETA":
      return "@beta";
    case "STABLE":
    case undefined:
      return "@public";
    default:
      throw new Error(`Unexpected release stage: ${releaseStage}`);
  }
}
