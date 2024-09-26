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
 * Cannot create a streaming dataset in a user folder.
 *
 * Log Safety: SAFE
 */
export interface CannotCreateStreamingDatasetInUserFolder {
  errorCode: "INVALID_ARGUMENT";
  errorName: "CannotCreateStreamingDatasetInUserFolder";
  errorInstanceId: string;
  parameters: {
    parentFolderRid: unknown;
  };
}

/**
 * Could not create the Dataset.
 *
 * Log Safety: SAFE
 */
export interface CreateStreamingDatasetPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "CreateStreamingDatasetPermissionDenied";
  errorInstanceId: string;
  parameters: {};
}

/**
 * The stream type is invalid.
 *
 * Log Safety: SAFE
 */
export interface InvalidStreamType {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidStreamType";
  errorInstanceId: string;
  parameters: {
    streamType: unknown;
  };
}

/**
 * The given Stream could not be found.
 *
 * Log Safety: UNSAFE
 */
export interface StreamNotFound {
  errorCode: "NOT_FOUND";
  errorName: "StreamNotFound";
  errorInstanceId: string;
  parameters: {
    datasetRid: unknown;
    streamBranchName: unknown;
  };
}
