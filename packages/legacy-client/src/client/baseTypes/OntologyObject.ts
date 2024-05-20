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

import type { ParameterValue } from "./ParameterValue.js";

export interface OntologyObject<
  T extends string = string,
  P extends NonNullable<ParameterValue> = NonNullable<ParameterValue>,
> {
  /** @deprecated use $rid */
  __rid: string;
  /** @deprecated use $apiName */
  __apiName: T;
  /** @deprecated use $primaryKey */
  __primaryKey: P;
  $rid: string;
  $apiName: T;
  $primaryKey: P;
}

export function isOntologyObject(obj: any): obj is OntologyObject {
  return obj && typeof obj === "object" && ((typeof obj.__apiName === "string"
    && "__primaryKey" in obj) || (typeof obj.$apiName === "string"
      && "$primaryKey" in obj));
}
