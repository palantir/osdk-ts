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

import type { OrganizationRid as _api_OrganizationRid } from "../__components.js";
export interface GetOrgSettingsByUserRequest {
}
export interface GetOrgSettingsByUserResponse {
  organization: _api_OrganizationRid;
  proposals: ProposalsSettings;
  usage: UsageSettings;
}
export interface GetOrgSettingsRequest {
}
/**
 * Response containing organization-wide settings managed by OMS.
 */
export interface GetOrgSettingsResponse {
  proposals: ProposalsSettings;
  usage: UsageSettings;
}
export interface ProposalsDisabled {
}
export interface ProposalsEnabled {
}
export interface ProposalsEnabledStatus_disabled {
  type: "disabled";
  disabled: ProposalsDisabled;
}

export interface ProposalsEnabledStatus_enabled {
  type: "enabled";
  enabled: ProposalsEnabled;
}
export type ProposalsEnabledStatus =
  | ProposalsEnabledStatus_disabled
  | ProposalsEnabledStatus_enabled;

export interface ProposalsSettings {
  enabledStatus: ProposalsEnabledStatus;
}
/**
 * Request to configure organization-wide Ontology settings.
 */
export interface SetOrgSettingsRequest {
  proposals?: ProposalsSettings | null | undefined;
  usage?: UsageSettings | null | undefined;
}
export interface SetOrgSettingsResponse {
}
export interface UsageSettings {
  usageEnabled: boolean;
}
