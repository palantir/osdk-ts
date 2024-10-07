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
 * The given Resource is not a folder.
 *
 * Log Safety: SAFE
 */
export interface CreateFolderOutsideProjectNotSupported {
  errorCode: "INVALID_ARGUMENT";
  errorName: "CreateFolderOutsideProjectNotSupported";
  errorInstanceId: string;
  parameters: {
    parentFolderRid: unknown;
  };
}

/**
 * Could not create the Folder.
 *
 * Log Safety: SAFE
 */
export interface CreateFolderPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "CreateFolderPermissionDenied";
  errorInstanceId: string;
  parameters: {};
}

/**
 * Could not delete the Resource.
 *
 * Log Safety: UNSAFE
 */
export interface DeleteResourcePermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "DeleteResourcePermissionDenied";
  errorInstanceId: string;
  parameters: {
    resourceRid: unknown;
  };
}

/**
 * The given Folder could not be found.
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
   * The display name of a Resource should not be exactly `.` or `..`, contain a forward slash `/` or be
too long.

   *
   * Log Safety: UNSAFE
   */
export interface InvalidDisplayName {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidDisplayName";
  errorInstanceId: string;
  parameters: {
    displayName: unknown;
  };
}

/**
 * The given Resource is not a Folder.
 *
 * Log Safety: UNSAFE
 */
export interface InvalidFolder {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidFolder";
  errorInstanceId: string;
  parameters: {
    resourceRid: unknown;
  };
}

/**
 * A Display Name must be provided.
 *
 * Log Safety: SAFE
 */
export interface MissingDisplayName {
  errorCode: "INVALID_ARGUMENT";
  errorName: "MissingDisplayName";
  errorInstanceId: string;
  parameters: {};
}

/**
 * Could not permanentlyDelete the Resource.
 *
 * Log Safety: UNSAFE
 */
export interface PermanentlyDeleteResourcePermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "PermanentlyDeleteResourcePermissionDenied";
  errorInstanceId: string;
  parameters: {
    resourceRid: unknown;
  };
}

/**
   * The Resource is not directly trashed.

   *
   * Log Safety: UNSAFE
   */
export interface ResourceNotDirectlyTrashed {
  errorCode: "INVALID_ARGUMENT";
  errorName: "ResourceNotDirectlyTrashed";
  errorInstanceId: string;
  parameters: {
    resourceRid: unknown;
  };
}

/**
 * The given Resource could not be found.
 *
 * Log Safety: UNSAFE
 */
export interface ResourceNotFound {
  errorCode: "NOT_FOUND";
  errorName: "ResourceNotFound";
  errorInstanceId: string;
  parameters: {
    resourceRid: unknown;
  };
}

/**
   * The Resource should be directly trashed before being permanently deleted.

   *
   * Log Safety: UNSAFE
   */
export interface ResourceNotTrashed {
  errorCode: "INVALID_ARGUMENT";
  errorName: "ResourceNotTrashed";
  errorInstanceId: string;
  parameters: {
    resourceRid: unknown;
  };
}

/**
 * Could not restore the Resource.
 *
 * Log Safety: UNSAFE
 */
export interface RestoreResourcePermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "RestoreResourcePermissionDenied";
  errorInstanceId: string;
  parameters: {
    resourceRid: unknown;
  };
}

/**
 * Auto-saved Resources cannot be trashed.
 *
 * Log Safety: UNSAFE
 */
export interface TrashingAutosavedResourcesNotSupported {
  errorCode: "INVALID_ARGUMENT";
  errorName: "TrashingAutosavedResourcesNotSupported";
  errorInstanceId: string;
  parameters: {
    resourceRid: unknown;
  };
}

/**
 * Hidden Resources cannot be trashed.
 *
 * Log Safety: UNSAFE
 */
export interface TrashingHiddenResourcesNotSupported {
  errorCode: "INVALID_ARGUMENT";
  errorName: "TrashingHiddenResourcesNotSupported";
  errorInstanceId: string;
  parameters: {
    resourceRid: unknown;
  };
}

/**
 * Spaces cannot be trashed.
 *
 * Log Safety: UNSAFE
 */
export interface TrashingSpaceNotSupported {
  errorCode: "INVALID_ARGUMENT";
  errorName: "TrashingSpaceNotSupported";
  errorInstanceId: string;
  parameters: {
    resourceRid: unknown;
  };
}
