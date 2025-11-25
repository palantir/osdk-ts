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

import type {
  BlockSetId as _api_BlockSetId,
  BlockSetInstallationJobRid as _api_BlockSetInstallationJobRid,
  BlockSetInstallationRid as _api_BlockSetInstallationRid,
  BlockSetInstallValidationErrorDetailV2
    as _api_BlockSetInstallValidationErrorDetailV2,
  BlockSetVersion as _api_BlockSetVersion,
  BlockSetVersionId as _api_BlockSetVersionId,
  CompassFolderRid as _api_CompassFolderRid,
  CronWithTimeZoneValue as _api_CronWithTimeZoneValue,
  ErrorSeverity as _api_ErrorSeverity,
  InstallationJobValidationError as _api_InstallationJobValidationError,
  InstallShapeValidationError as _api_InstallShapeValidationError,
  MarketplaceRid as _api_MarketplaceRid,
  OntologyRid as _api_OntologyRid,
  ResolvedAllowOntologySchemaMigrationsShape
    as _api_ResolvedAllowOntologySchemaMigrationsShape,
  SecretName as _api_SecretName,
} from "../__components.js";
export interface CredentialInput {
  secrets: Record<_api_SecretName, SecretValue>;
}
export interface Error {
  error: ErrorUnion;
  severity: _api_ErrorSeverity;
}
export interface ErrorUnion_shape {
  type: "shape";
  shape: ShapeError;
}

export interface ErrorUnion_blockSet {
  type: "blockSet";
  blockSet: _api_BlockSetInstallValidationErrorDetailV2;
}

export interface ErrorUnion_job {
  type: "job";
  job: _api_InstallationJobValidationError;
}
export type ErrorUnion =
  | ErrorUnion_shape
  | ErrorUnion_blockSet
  | ErrorUnion_job;

export interface GetInputsRequest {
  marketplaceRid: _api_MarketplaceRid;
  preferApiNameResolution?: boolean | null | undefined;
  targetVersion: TargetVersion;
}
export interface GetInputsResponse {
  inputs: NewInputs;
}
export type InputShapeTitle = string;
export type InstallationDisplayName = string;
export interface InstallRequest {
  folderRid: _api_CompassFolderRid;
  inputs: NewInputs;
  installationDisplayName?: InstallationDisplayName | null | undefined;
  marketplaceRid: _api_MarketplaceRid;
  ontologyRid?: _api_OntologyRid | null | undefined;
  targetVersion: TargetVersion;
}
export interface InstallResponse {
  installationRid: _api_BlockSetInstallationRid;
  jobRid: _api_BlockSetInstallationJobRid;
}
/**
 * This input mapping will replace the current inputs for the installation, i.e. patching the existing inputs by
 * only providing a subset of inputs is not supported.
 *
 * If there are multiple input shapes with the same title on the product, they will all get mapped to the single
 * value for that title that is present in this map.
 */
export type NewInputs = Record<InputShapeTitle, SimpleResolvedInputShape>;
export interface RidWithVersion {
  rid: string;
  version?: string | null | undefined;
}
export type SecretValue = string;
export interface ShapeError {
  affectedShape: InputShapeTitle;
  error: _api_InstallShapeValidationError;
}
export interface SimpleResolvedInputShape_rid {
  type: "rid";
  rid: RidWithVersion;
}

export interface SimpleResolvedInputShape_apiName {
  type: "apiName";
  apiName: string;
}

export interface SimpleResolvedInputShape_string {
  type: "string";
  string: string;
}

export interface SimpleResolvedInputShape_strings {
  type: "strings";
  strings: Array<string>;
}

export interface SimpleResolvedInputShape_boolean {
  type: "boolean";
  boolean: boolean;
}

export interface SimpleResolvedInputShape_integer {
  type: "integer";
  integer: number;
}

export interface SimpleResolvedInputShape_cron {
  type: "cron";
  cron: _api_CronWithTimeZoneValue;
}

export interface SimpleResolvedInputShape_credential {
  type: "credential";
  credential: CredentialInput;
}

export interface SimpleResolvedInputShape_allowOntologySchemaMigrations {
  type: "allowOntologySchemaMigrations";
  allowOntologySchemaMigrations:
    _api_ResolvedAllowOntologySchemaMigrationsShape;
}
export type SimpleResolvedInputShape =
  | SimpleResolvedInputShape_rid
  | SimpleResolvedInputShape_apiName
  | SimpleResolvedInputShape_string
  | SimpleResolvedInputShape_strings
  | SimpleResolvedInputShape_boolean
  | SimpleResolvedInputShape_integer
  | SimpleResolvedInputShape_cron
  | SimpleResolvedInputShape_credential
  | SimpleResolvedInputShape_allowOntologySchemaMigrations;

export interface TargetVersion_latest {
  type: "latest";
  latest: _api_BlockSetId;
}

export interface TargetVersion_semver {
  type: "semver";
  semver: TargetVersionSemver;
}

export interface TargetVersion_versionId {
  type: "versionId";
  versionId: _api_BlockSetVersionId;
}
export type TargetVersion =
  | TargetVersion_latest
  | TargetVersion_semver
  | TargetVersion_versionId;

export interface TargetVersionSemver {
  blockSetId: _api_BlockSetId;
  version: _api_BlockSetVersion;
}
export interface UpgradeRequest {
  inputs?: NewInputs | null | undefined;
  targetVersion: TargetVersion;
}
export interface UpgradeResponse {
  jobRid: _api_BlockSetInstallationJobRid;
}
