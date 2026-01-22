/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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
  CompassProjectRid as _api_CompassProjectRid,
  OntologyPackageRid as _api_OntologyPackageRid,
  OntologyRid as _api_OntologyRid,
  UseCaseRid as _api_UseCaseRid,
} from "../__components.js";

/**
 * Request to get packages for the specified packageRids. At most 100 packageRids can be requested per
 * call.
 */
export interface BatchGetPackagesRequest {
  packageRids: Array<_api_OntologyPackageRid>;
}
/**
 * Response to a request to get packages for the specified package Rids.
 */
export interface BatchGetPackagesResponse {
  ontologyPackageMetadata: Record<
    _api_OntologyPackageRid,
    OntologyPackageMetadata
  >;
}
/**
 * Request to create a new package.
 */
export interface CreatePackageRequest {
  owningResource: OwningResource;
}
/**
 * Response to a request to create a new package.
 */
export interface CreatePackageResponse {
  packageRid: _api_OntologyPackageRid;
}
/**
 * Request to get packages for the specified owning resources. At most 100 owning resources can be requested per
 * call
 */
export interface GetPackagesForOwningResourcesRequest {
  owningResources: Array<OwningResource>;
}
/**
 * Response to a request to get packages for the specified owning resources.
 */
export interface GetPackagesForOwningResourcesResponse {
  ontologyPackageMetadata: Array<OntologyPackageMetadata>;
}
/**
 * Metadata of an ontology package
 */
export interface OntologyPackageMetadata {
  ontologyRid: _api_OntologyRid;
  owningRid: OwningResource;
  packageRid: _api_OntologyPackageRid;
}
export interface OwningResource_useCase {
  type: "useCase";
  useCase: _api_UseCaseRid;
}

export interface OwningResource_compassProject {
  type: "compassProject";
  compassProject: _api_CompassProjectRid;
}
/**
 * The resource that owns the ontology package.
 */
export type OwningResource =
  | OwningResource_useCase
  | OwningResource_compassProject;
