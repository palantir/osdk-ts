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

import type { SdkPackageFailedStatus } from "./SdkPackageFailedStatus.js";
import type { SdkPackageInProgressStatus } from "./SdkPackageInProgressStatus.js";
import type { SdkPackageRequestedStatus } from "./SdkPackageRequestedStatus.js";
import type { SdkPackageSuccessStatus } from "./SdkPackageSuccessStatus.js";
export interface SdkPackageStatus_requested {
  type: "requested";
  requested: SdkPackageRequestedStatus;
}

export interface SdkPackageStatus_inProgress {
  type: "inProgress";
  inProgress: SdkPackageInProgressStatus;
}

export interface SdkPackageStatus_success {
  type: "success";
  success: SdkPackageSuccessStatus;
}

export interface SdkPackageStatus_failed {
  type: "failed";
  failed: SdkPackageFailedStatus;
}
export type SdkPackageStatus =
  | SdkPackageStatus_requested
  | SdkPackageStatus_inProgress
  | SdkPackageStatus_success
  | SdkPackageStatus_failed;
