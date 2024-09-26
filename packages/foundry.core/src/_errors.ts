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
 * The submitted batch request was too large.
 *
 * Log Safety: SAFE
 */
export interface BatchRequestSizeExceededLimit {
  errorCode: "INVALID_ARGUMENT";
  errorName: "BatchRequestSizeExceededLimit";
  errorInstanceId: string;
  parameters: {
    MaximumBatchSize: unknown;
    ProvidedBatchSize: unknown;
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
 * Getting a hidden resource is not supported.
 *
 * Log Safety: UNSAFE
 */
export interface GetHiddenResourceNotSupported {
  errorCode: "INVALID_ARGUMENT";
  errorName: "GetHiddenResourceNotSupported";
  errorInstanceId: string;
  parameters: {
    resourceRid: unknown;
  };
}

/**
 * Getting the root folder as a resource is not supported.
 *
 * Log Safety: SAFE
 */
export interface GetRootFolderNotSupported {
  errorCode: "INVALID_ARGUMENT";
  errorName: "GetRootFolderNotSupported";
  errorInstanceId: string;
  parameters: {};
}

/**
 * Getting a service is not supported.
 *
 * Log Safety: UNSAFE
 */
export interface GetServiceResourceNotSupported {
  errorCode: "INVALID_ARGUMENT";
  errorName: "GetServiceResourceNotSupported";
  errorInstanceId: string;
  parameters: {
    resourceRid: unknown;
  };
}

/**
 * Getting a space as a resource is not supported.
 *
 * Log Safety: SAFE
 */
export interface GetSpaceResourceNotSupported {
  errorCode: "INVALID_ARGUMENT";
  errorName: "GetSpaceResourceNotSupported";
  errorInstanceId: string;
  parameters: {
    spaceRid: unknown;
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
 * The provided page token is invalid.
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
 * The time zone is invalid.
 *
 * Log Safety: SAFE
 */
export interface InvalidTimeZone {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidTimeZone";
  errorInstanceId: string;
  parameters: {
    timeZone: unknown;
  };
}

/**
 * Batch requests must contain at least one element.
 *
 * Log Safety: SAFE
 */
export interface MissingBatchRequest {
  errorCode: "INVALID_ARGUMENT";
  errorName: "MissingBatchRequest";
  errorInstanceId: string;
  parameters: {};
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
