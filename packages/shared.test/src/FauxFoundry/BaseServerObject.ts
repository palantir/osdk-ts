/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import type * as OntologiesV2 from "@osdk/foundry.ontologies";

/**
 * A simplified type safe version of `OntologyObjectV2` that adds a tiny bit
 * more strictness in that it declares the meaning of values for the `__` prefix
 * props.
 */
export interface BaseServerObject extends OntologiesV2.OntologyObjectV2 {
  __rid?: string;
  __primaryKey: string | number | boolean;
  __apiName: OntologiesV2.ObjectTypeApiName;
  __title?: string;

  [key: string]: unknown;
}

/**
 * Helpful for distinguishing between an object that looks like it is for the server (__apiName)
 * vs one that is for the client ($apiName).
 */
export function isBaseServerObject(obj: unknown): obj is BaseServerObject {
  return (
    typeof obj === "object"
    && obj != null
    && "__primaryKey" in obj
    && "__apiName" in obj
    && !("$apiName" in obj)
    && !("$primaryKey" in obj)
  );
}
