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
 * The given website version is deployed. You must un-deploy it before deleting it.
 *
 * Log Safety: UNSAFE
 */
export interface CannotDeleteDeployedVersion {
  errorCode: "INVALID_ARGUMENT";
  errorName: "CannotDeleteDeployedVersion";
  errorInstanceId: string;
  parameters: {
    version: unknown;
  };
}

/**
 * Could not delete the Version.
 *
 * Log Safety: UNSAFE
 */
export interface DeleteVersionPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "DeleteVersionPermissionDenied";
  errorInstanceId: string;
  parameters: {
    thirdPartyApplicationRid: unknown;
    versionVersion: unknown;
  };
}

/**
 * Could not deploy the Website.
 *
 * Log Safety: SAFE
 */
export interface DeployWebsitePermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "DeployWebsitePermissionDenied";
  errorInstanceId: string;
  parameters: {
    thirdPartyApplicationRid: unknown;
  };
}

/**
 * The given website version is invalid. Versions must follow semantic versioning with major, minor, and patch versions separate by periods, e.g. `0.1.0` or `1.2.3`.
 *
 * Log Safety: UNSAFE
 */
export interface InvalidVersion {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidVersion";
  errorInstanceId: string;
  parameters: {
    version: unknown;
  };
}

/**
 * The given ThirdPartyApplication could not be found.
 *
 * Log Safety: SAFE
 */
export interface ThirdPartyApplicationNotFound {
  errorCode: "NOT_FOUND";
  errorName: "ThirdPartyApplicationNotFound";
  errorInstanceId: string;
  parameters: {
    thirdPartyApplicationRid: unknown;
  };
}

/**
 * Could not undeploy the Website.
 *
 * Log Safety: SAFE
 */
export interface UndeployWebsitePermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "UndeployWebsitePermissionDenied";
  errorInstanceId: string;
  parameters: {
    thirdPartyApplicationRid: unknown;
  };
}

/**
 * Could not upload the Version.
 *
 * Log Safety: SAFE
 */
export interface UploadVersionPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "UploadVersionPermissionDenied";
  errorInstanceId: string;
  parameters: {
    thirdPartyApplicationRid: unknown;
  };
}

/**
 * The given website version already exists.
 *
 * Log Safety: UNSAFE
 */
export interface VersionAlreadyExists {
  errorCode: "CONFLICT";
  errorName: "VersionAlreadyExists";
  errorInstanceId: string;
  parameters: {
    version: unknown;
  };
}

/**
 * The given Version could not be found.
 *
 * Log Safety: UNSAFE
 */
export interface VersionNotFound {
  errorCode: "NOT_FOUND";
  errorName: "VersionNotFound";
  errorInstanceId: string;
  parameters: {
    thirdPartyApplicationRid: unknown;
    versionVersion: unknown;
  };
}

/**
 * The given Website could not be found.
 *
 * Log Safety: SAFE
 */
export interface WebsiteNotFound {
  errorCode: "NOT_FOUND";
  errorName: "WebsiteNotFound";
  errorInstanceId: string;
  parameters: {
    thirdPartyApplicationRid: unknown;
  };
}
