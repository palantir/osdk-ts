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
  MonitorValidationError as _api_MonitorValidationError,
  MonitorValidationWarning as _api_MonitorValidationWarning,
  ProjectScopeIssue as _api_ProjectScopeIssue,
} from "../__components.js";
import type {
  CreateMonitorRequest as _api_registry_CreateMonitorRequest,
  UpdateMonitorRequest as _api_registry_UpdateMonitorRequest,
} from "../registry/__components.js";
export interface ValidateMonitorCreateRequest {
  request: _api_registry_CreateMonitorRequest;
}
export interface ValidateMonitorResponse {
  errors: Array<_api_MonitorValidationError>;
  projectScopeIssues: Array<_api_ProjectScopeIssue>;
  warnings: Array<_api_MonitorValidationWarning>;
}
export interface ValidateMonitorUpdateRequest {
  request: _api_registry_UpdateMonitorRequest;
}
