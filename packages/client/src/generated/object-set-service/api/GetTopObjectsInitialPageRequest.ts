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

import type { DerivedProperties } from "./DerivedProperties.js";
import type { ObjectLoadingResponseOptions } from "./ObjectLoadingResponseOptions.js";
import type { ObjectSet } from "./ObjectSet.js";
import type { ObjectSetContext } from "./ObjectSetContext.js";
import type { ObjectTypeId } from "./ObjectTypeId.js";
import type { PropertySetV2 } from "./PropertySetV2.js";
import type { ReferenceSigningOptions } from "./ReferenceSigningOptions.js";
import type { ResponseOptions } from "./ResponseOptions.js";
import type { ResultOrdering } from "./ResultOrdering.js";
export interface GetTopObjectsInitialPageRequest {
  objectSet: ObjectSet;
  objectSetContext: ObjectSetContext;
  runtimeDerivedProperties: Record<ObjectTypeId, DerivedProperties>;
  propertySet: PropertySetV2;
  resultOrdering: ResultOrdering;
  pageSize: number;
  responseOptions: ResponseOptions | undefined;
  referenceSigningOptions: ReferenceSigningOptions | undefined;
  objectLoadingResponseOptions: ObjectLoadingResponseOptions | undefined;
}
