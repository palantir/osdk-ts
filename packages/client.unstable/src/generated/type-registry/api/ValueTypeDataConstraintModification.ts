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

import type { DataConstraintWrapperModification } from "./DataConstraintWrapperModification.js";

/**
 * A copy of ValueTypeDataConstraint made to decouple the storage and request types for Value Type data
 * constraint representation. At the moment, the only difference between the types is for StructV2.
 */
export interface ValueTypeDataConstraintModification {
  constraint: DataConstraintWrapperModification;
}
