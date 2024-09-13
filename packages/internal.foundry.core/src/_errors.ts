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

export type LooselyBrandedString<T extends string> = string & {
  __LOOSE_BRAND?: T;
};

/**
 * The given object could not be mapped to a Marketplace installation.
 *
 * Log Safety: UNSAFE
 */
export interface MarketplaceObjectMappingNotFound {
  errorCode: "NOT_FOUND";
  errorName: "MarketplaceObjectMappingNotFound";
  errorInstanceId: string;
  parameters: {
    objectType: unknown;
    artifactRepository: unknown;
    packageName: unknown;
  };
}

/**
 * The requested file could not be found on the given transaction range, or the client token does not have access to it.
 *
 * Log Safety: UNSAFE
 */
export interface FileNotFoundOnTransactionRange {
  errorCode: "NOT_FOUND";
  errorName: "FileNotFoundOnTransactionRange";
  errorInstanceId: string;
  parameters: {
    datasetRid: unknown;
    startTransactionRid: unknown;
    endTransactionRid: unknown;
    path: unknown;
  };
}

/**
 * The given action request has multiple edits on the same object.
 *
 * Log Safety: SAFE
 */
export interface ActionContainsDuplicateEdits {
  errorCode: "CONFLICT";
  errorName: "ActionContainsDuplicateEdits";
  errorInstanceId: string;
  parameters: {};
}

/**
 * The given query could not be mapped to a Marketplace installation.
 *
 * Log Safety: UNSAFE
 */
export interface MarketplaceQueryMappingNotFound {
  errorCode: "NOT_FOUND";
  errorName: "MarketplaceQueryMappingNotFound";
  errorInstanceId: string;
  parameters: {
    queryType: unknown;
    artifactRepository: unknown;
    packageName: unknown;
  };
}

/**
 * The provided resource name is already in use by another resource in the same folder.
 *
 * Log Safety: UNSAFE
 */
export interface ResourceNameAlreadyExists {
  errorCode: "CONFLICT";
  errorName: "ResourceNameAlreadyExists";
  errorInstanceId: string;
  parameters: {
    parentFolderRid: unknown;
    resourceName: unknown;
  };
}

/**
 * The given options are individually valid but cannot be used in the given combination.
 *
 * Log Safety: SAFE
 */
export interface InvalidApplyActionOptionCombination {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidApplyActionOptionCombination";
  errorInstanceId: string;
  parameters: {
    invalidCombination: unknown;
  };
}

/**
   * This feature is only supported in preview mode. Please use preview=true in the query
parameters to call this endpoint.
   *
   * Log Safety: SAFE
   */
export interface ApiFeaturePreviewUsageOnly {
  errorCode: "INVALID_ARGUMENT";
  errorName: "ApiFeaturePreviewUsageOnly";
  errorInstanceId: string;
  parameters: {};
}

/**
 * The given action could not be mapped to a Marketplace installation.
 *
 * Log Safety: UNSAFE
 */
export interface MarketplaceActionMappingNotFound {
  errorCode: "NOT_FOUND";
  errorName: "MarketplaceActionMappingNotFound";
  errorInstanceId: string;
  parameters: {
    actionType: unknown;
    artifactRepository: unknown;
    packageName: unknown;
  };
}

/**
 * The provided page size was zero or negative. Page sizes must be greater than zero.
 *
 * Log Safety: SAFE
 */
export interface InvalidPageSize {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidPageSize";
  errorInstanceId: string;
  parameters: {
    pageSize: unknown;
  };
}

/**
 * The given link could not be mapped to a Marketplace installation.
 *
 * Log Safety: UNSAFE
 */
export interface MarketplaceLinkMappingNotFound {
  errorCode: "NOT_FOUND";
  errorName: "MarketplaceLinkMappingNotFound";
  errorInstanceId: string;
  parameters: {
    linkType: unknown;
    artifactRepository: unknown;
    packageName: unknown;
  };
}

/**
 * The requested folder could not be found, or the client token does not have access to it.
 *
 * Log Safety: SAFE
 */
export interface FolderNotFound {
  errorCode: "NOT_FOUND";
  errorName: "FolderNotFound";
  errorInstanceId: string;
  parameters: {
    folderRid: unknown;
  };
}

/**
 * The given marketplace installation could not be found or the user does not have access to it.
 *
 * Log Safety: UNSAFE
 */
export interface MarketplaceInstallationNotFound {
  errorCode: "NOT_FOUND";
  errorName: "MarketplaceInstallationNotFound";
  errorInstanceId: string;
  parameters: {
    artifactRepository: unknown;
    packageName: unknown;
  };
}

/**
 * The provided page token could not be used to retrieve the next page of results.
 *
 * Log Safety: UNSAFE
 */
export interface InvalidPageToken {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidPageToken";
  errorInstanceId: string;
  parameters: {
    pageToken: unknown;
  };
}

/**
 * The given action request performs edits on a type that is read-only or does not allow edits.
 *
 * Log Safety: SAFE
 */
export interface ActionEditsReadOnlyEntity {
  errorCode: "INVALID_ARGUMENT";
  errorName: "ActionEditsReadOnlyEntity";
  errorInstanceId: string;
  parameters: {
    entityTypeRid: unknown;
  };
}

/**
 * An unknown distance unit was provided.
 *
 * Log Safety: UNSAFE
 */
export interface UnknownDistanceUnit {
  errorCode: "INVALID_ARGUMENT";
  errorName: "UnknownDistanceUnit";
  errorInstanceId: string;
  parameters: {
    unknownUnit: unknown;
    knownUnits: unknown;
  };
}

/**
 * The given Ontology API name is not unique. Use the Ontology RID in place of the Ontology API name.
 *
 * Log Safety: UNSAFE
 */
export interface OntologyApiNameNotUnique {
  errorCode: "INVALID_ARGUMENT";
  errorName: "OntologyApiNameNotUnique";
  errorInstanceId: string;
  parameters: {
    ontologyApiName: unknown;
  };
}

/**
 * A post body is required for this endpoint, but was not found in the request.
 *
 * Log Safety: SAFE
 */
export interface MissingPostBody {
  errorCode: "INVALID_ARGUMENT";
  errorName: "MissingPostBody";
  errorInstanceId: string;
  parameters: {};
}

/**
 * The given parameters are individually valid but cannot be used in the given combination.
 *
 * Log Safety: SAFE
 */
export interface InvalidParameterCombination {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidParameterCombination";
  errorInstanceId: string;
  parameters: {
    validCombinations: unknown;
    providedParameters: unknown;
  };
}

/**
 * You are not allowed to use Palantir APIs.
 *
 * Log Safety: SAFE
 */
export interface ApiUsageDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "ApiUsageDenied";
  errorInstanceId: string;
  parameters: {};
}
