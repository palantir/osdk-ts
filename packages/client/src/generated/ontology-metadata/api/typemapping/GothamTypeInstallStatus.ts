/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import type { GothamTypeInstallFailedStatus } from "./GothamTypeInstallFailedStatus.js";
import type { GothamTypeInstallInstalledStatus } from "./GothamTypeInstallInstalledStatus.js";
import type { GothamTypeInstallInstallingStatus } from "./GothamTypeInstallInstallingStatus.js";
import type { GothamTypeInstallNotFoundStatus } from "./GothamTypeInstallNotFoundStatus.js";
import type { GothamTypeInstallQueuedStatus } from "./GothamTypeInstallQueuedStatus.js";
import type { GothamTypeInstallStagedStatus } from "./GothamTypeInstallStagedStatus.js";
export interface GothamTypeInstallStatus_notFound {
  type: "notFound";
  notFound: GothamTypeInstallNotFoundStatus;
}

export interface GothamTypeInstallStatus_queued {
  type: "queued";
  queued: GothamTypeInstallQueuedStatus;
}

export interface GothamTypeInstallStatus_installing {
  type: "installing";
  installing: GothamTypeInstallInstallingStatus;
}

export interface GothamTypeInstallStatus_failed {
  type: "failed";
  failed: GothamTypeInstallFailedStatus;
}

export interface GothamTypeInstallStatus_staged {
  type: "staged";
  staged: GothamTypeInstallStagedStatus;
}

export interface GothamTypeInstallStatus_installed {
  type: "installed";
  installed: GothamTypeInstallInstalledStatus;
}
export type GothamTypeInstallStatus =
  | GothamTypeInstallStatus_notFound
  | GothamTypeInstallStatus_queued
  | GothamTypeInstallStatus_installing
  | GothamTypeInstallStatus_failed
  | GothamTypeInstallStatus_staged
  | GothamTypeInstallStatus_installed;
