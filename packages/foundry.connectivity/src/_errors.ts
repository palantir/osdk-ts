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
 * Could not delete the FileImport.
 *
 * Log Safety: SAFE
 */
export interface DeleteFileImportPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "DeleteFileImportPermissionDenied";
  errorInstanceId: string;
  parameters: {
    fileImportRid: unknown;
  };
}

/**
 * Could not execute the FileImport.
 *
 * Log Safety: SAFE
 */
export interface ExecuteFileImportPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "ExecuteFileImportPermissionDenied";
  errorInstanceId: string;
  parameters: {
    fileImportRid: unknown;
  };
}

/**
 * The given FileImport could not be found.
 *
 * Log Safety: SAFE
 */
export interface FileImportNotFound {
  errorCode: "NOT_FOUND";
  errorName: "FileImportNotFound";
  errorInstanceId: string;
  parameters: {
    fileImportRid: unknown;
  };
}
