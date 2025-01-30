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

import type { GenericOntologyMetadataError } from "../../api/GenericOntologyMetadataError.js";
import type { DatasourceModificationConstraintError } from "./DatasourceModificationConstraintError.js";
import type { ForeignKeyConstraintError } from "./ForeignKeyConstraintError.js";
import type { FoundrySchemaConstraintError } from "./FoundrySchemaConstraintError.js";
import type { GeotimeSeriesReferencePropertyTypeConstraintError } from "./GeotimeSeriesReferencePropertyTypeConstraintError.js";
import type { InterfaceImplementationError } from "./InterfaceImplementationError.js";
import type { MediaReferencePropertyTypeConstraintError } from "./MediaReferencePropertyTypeConstraintError.js";
import type { NumberOfDatasourcesConstraintError } from "./NumberOfDatasourcesConstraintError.js";
import type { SchemaMigrationError } from "./SchemaMigrationError.js";
import type { TimeDependentPropertyTypeConstraintError } from "./TimeDependentPropertyTypeConstraintError.js";
export interface ValidationError_foreignKeyConstraint {
  type: "foreignKeyConstraint";
  foreignKeyConstraint: ForeignKeyConstraintError;
}

export interface ValidationError_foundrySchemaConstraint {
  type: "foundrySchemaConstraint";
  foundrySchemaConstraint: FoundrySchemaConstraintError;
}

export interface ValidationError_numberOfDatasourcesConstraint {
  type: "numberOfDatasourcesConstraint";
  numberOfDatasourcesConstraint: NumberOfDatasourcesConstraintError;
}

export interface ValidationError_schemaMigration {
  type: "schemaMigration";
  schemaMigration: SchemaMigrationError;
}

export interface ValidationError_mediaReferencePropertyTypeConstraint {
  type: "mediaReferencePropertyTypeConstraint";
  mediaReferencePropertyTypeConstraint:
    MediaReferencePropertyTypeConstraintError;
}

export interface ValidationError_interfaceImplementationConstraint {
  type: "interfaceImplementationConstraint";
  interfaceImplementationConstraint: InterfaceImplementationError;
}

export interface ValidationError_timeDependentPropertyTypeConstraint {
  type: "timeDependentPropertyTypeConstraint";
  timeDependentPropertyTypeConstraint: TimeDependentPropertyTypeConstraintError;
}

export interface ValidationError_geotimeSeriesReferencePropertyTypeConstraint {
  type: "geotimeSeriesReferencePropertyTypeConstraint";
  geotimeSeriesReferencePropertyTypeConstraint:
    GeotimeSeriesReferencePropertyTypeConstraintError;
}

export interface ValidationError_datasourceModificationConstraint {
  type: "datasourceModificationConstraint";
  datasourceModificationConstraint: DatasourceModificationConstraintError;
}

export interface ValidationError_genericOntologyMetadataError {
  type: "genericOntologyMetadataError";
  genericOntologyMetadataError: GenericOntologyMetadataError;
}
export type ValidationError =
  | ValidationError_foreignKeyConstraint
  | ValidationError_foundrySchemaConstraint
  | ValidationError_numberOfDatasourcesConstraint
  | ValidationError_schemaMigration
  | ValidationError_mediaReferencePropertyTypeConstraint
  | ValidationError_interfaceImplementationConstraint
  | ValidationError_timeDependentPropertyTypeConstraint
  | ValidationError_geotimeSeriesReferencePropertyTypeConstraint
  | ValidationError_datasourceModificationConstraint
  | ValidationError_genericOntologyMetadataError;
