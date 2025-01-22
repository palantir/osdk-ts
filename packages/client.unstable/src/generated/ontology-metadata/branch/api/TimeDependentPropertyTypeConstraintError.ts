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

import type { TimeDependentPropertyTypeHasNoDatasourcesError } from "./TimeDependentPropertyTypeHasNoDatasourcesError.js";
import type { TimeSeriesDatasourceDoesNotReferenceExistingPropertiesError } from "./TimeSeriesDatasourceDoesNotReferenceExistingPropertiesError.js";
import type { TimeSeriesDatasourceDoesNotReferenceTimeDependentPropertiesError } from "./TimeSeriesDatasourceDoesNotReferenceTimeDependentPropertiesError.js";
export interface TimeDependentPropertyTypeConstraintError_timeDependentPropertyTypeHasNoDatasources {
  type: "timeDependentPropertyTypeHasNoDatasources";
  timeDependentPropertyTypeHasNoDatasources:
    TimeDependentPropertyTypeHasNoDatasourcesError;
}

export interface TimeDependentPropertyTypeConstraintError_timeSeriesDatasourceDoesNotReferenceExistingProperties {
  type: "timeSeriesDatasourceDoesNotReferenceExistingProperties";
  timeSeriesDatasourceDoesNotReferenceExistingProperties:
    TimeSeriesDatasourceDoesNotReferenceExistingPropertiesError;
}

export interface TimeDependentPropertyTypeConstraintError_timeSeriesDatasourceDoesNotReferenceTimeDependentProperties {
  type: "timeSeriesDatasourceDoesNotReferenceTimeDependentProperties";
  timeSeriesDatasourceDoesNotReferenceTimeDependentProperties:
    TimeSeriesDatasourceDoesNotReferenceTimeDependentPropertiesError;
}
/**
 * A type representing validation errors associated with time dependent property type validation.
 */
export type TimeDependentPropertyTypeConstraintError =
  | TimeDependentPropertyTypeConstraintError_timeDependentPropertyTypeHasNoDatasources
  | TimeDependentPropertyTypeConstraintError_timeSeriesDatasourceDoesNotReferenceExistingProperties
  | TimeDependentPropertyTypeConstraintError_timeSeriesDatasourceDoesNotReferenceTimeDependentProperties;
