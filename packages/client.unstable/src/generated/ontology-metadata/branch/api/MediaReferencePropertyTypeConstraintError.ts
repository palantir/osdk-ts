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

import type { MediaDatasourceDoesNotReferenceExistingPropertiesError } from "./MediaDatasourceDoesNotReferenceExistingPropertiesError.js";
import type { MediaDatasourceDoesNotReferenceMediaReferencePropertiesError } from "./MediaDatasourceDoesNotReferenceMediaReferencePropertiesError.js";
import type { MediaReferencePropertyTypeHasNoDatasourcesError } from "./MediaReferencePropertyTypeHasNoDatasourcesError.js";
import type { MediaViewDatasourceDoesNotReferenceMediaReferencePropertiesError } from "./MediaViewDatasourceDoesNotReferenceMediaReferencePropertiesError.js";
export interface MediaReferencePropertyTypeConstraintError_mediaReferencePropertyTypeHasNoDatasources {
  type: "mediaReferencePropertyTypeHasNoDatasources";
  mediaReferencePropertyTypeHasNoDatasources:
    MediaReferencePropertyTypeHasNoDatasourcesError;
}

export interface MediaReferencePropertyTypeConstraintError_mediaDatasourceDoesNotReferenceExistingProperties {
  type: "mediaDatasourceDoesNotReferenceExistingProperties";
  mediaDatasourceDoesNotReferenceExistingProperties:
    MediaDatasourceDoesNotReferenceExistingPropertiesError;
}

export interface MediaReferencePropertyTypeConstraintError_mediaDatasourceDoesNotReferenceMediaReferenceProperties {
  type: "mediaDatasourceDoesNotReferenceMediaReferenceProperties";
  mediaDatasourceDoesNotReferenceMediaReferenceProperties:
    MediaDatasourceDoesNotReferenceMediaReferencePropertiesError;
}

export interface MediaReferencePropertyTypeConstraintError_mediaViewDatasourceDoesNotReferenceMediaReferenceProperties {
  type: "mediaViewDatasourceDoesNotReferenceMediaReferenceProperties";
  mediaViewDatasourceDoesNotReferenceMediaReferenceProperties:
    MediaViewDatasourceDoesNotReferenceMediaReferencePropertiesError;
}
/**
 * A type representing validation errors associated with media reference property type validation.
 */
export type MediaReferencePropertyTypeConstraintError =
  | MediaReferencePropertyTypeConstraintError_mediaReferencePropertyTypeHasNoDatasources
  | MediaReferencePropertyTypeConstraintError_mediaDatasourceDoesNotReferenceExistingProperties
  | MediaReferencePropertyTypeConstraintError_mediaDatasourceDoesNotReferenceMediaReferenceProperties
  | MediaReferencePropertyTypeConstraintError_mediaViewDatasourceDoesNotReferenceMediaReferenceProperties;
