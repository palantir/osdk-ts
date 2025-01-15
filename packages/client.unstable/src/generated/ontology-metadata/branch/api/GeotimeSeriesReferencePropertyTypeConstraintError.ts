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

import type { GeotimeSeriesDatasourceDoesNotReferenceExistingPropertiesError } from "./GeotimeSeriesDatasourceDoesNotReferenceExistingPropertiesError.js";
import type { GeotimeSeriesDatasourceDoesNotReferenceGeotimeSeriesReferencePropertiesError } from "./GeotimeSeriesDatasourceDoesNotReferenceGeotimeSeriesReferencePropertiesError.js";
import type { GeotimeSeriesReferencePropertyTypeHasNoDatasourcesError } from "./GeotimeSeriesReferencePropertyTypeHasNoDatasourcesError.js";
export interface GeotimeSeriesReferencePropertyTypeConstraintError_geotimeSeriesReferencePropertyTypeHasNoDatasources {
  type: "geotimeSeriesReferencePropertyTypeHasNoDatasources";
  geotimeSeriesReferencePropertyTypeHasNoDatasources:
    GeotimeSeriesReferencePropertyTypeHasNoDatasourcesError;
}

export interface GeotimeSeriesReferencePropertyTypeConstraintError_geotimeSeriesDatasourceDoesNotReferenceExistingProperties {
  type: "geotimeSeriesDatasourceDoesNotReferenceExistingProperties";
  geotimeSeriesDatasourceDoesNotReferenceExistingProperties:
    GeotimeSeriesDatasourceDoesNotReferenceExistingPropertiesError;
}

export interface GeotimeSeriesReferencePropertyTypeConstraintError_geotimeSeriesDatasourceDoesNotReferenceGeotimeSeriesReferenceProperties {
  type:
    "geotimeSeriesDatasourceDoesNotReferenceGeotimeSeriesReferenceProperties";
  geotimeSeriesDatasourceDoesNotReferenceGeotimeSeriesReferenceProperties:
    GeotimeSeriesDatasourceDoesNotReferenceGeotimeSeriesReferencePropertiesError;
}
/**
 * A type representing validation errors associated with geotime series reference property type validation.
 */
export type GeotimeSeriesReferencePropertyTypeConstraintError =
  | GeotimeSeriesReferencePropertyTypeConstraintError_geotimeSeriesReferencePropertyTypeHasNoDatasources
  | GeotimeSeriesReferencePropertyTypeConstraintError_geotimeSeriesDatasourceDoesNotReferenceExistingProperties
  | GeotimeSeriesReferencePropertyTypeConstraintError_geotimeSeriesDatasourceDoesNotReferenceGeotimeSeriesReferenceProperties;
