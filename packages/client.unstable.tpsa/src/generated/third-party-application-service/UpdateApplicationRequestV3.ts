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

import type { ApplicationSdkSettingsModification } from "./ApplicationSdkSettingsModification.js";
import type { AuthScopeModification } from "./AuthScopeModification.js";
import type { ClientSpecification } from "./ClientSpecification.js";
import type { DataScopeModification } from "./DataScopeModification.js";
import type { OptionalStringModification } from "./OptionalStringModification.js";
import type { OrganizationRid } from "./OrganizationRid.js";

/**
 * Only fields that are present in the request will be updated.
 */
export interface UpdateApplicationRequestV3 {
  name: string | undefined;
  description: OptionalStringModification | undefined;
  packageName: OptionalStringModification | undefined;
  logoUri: OptionalStringModification | undefined;
  clientSpecification: ClientSpecification | undefined;
  dataScope: DataScopeModification | undefined;
  authScope: AuthScopeModification | undefined;
  sdkSettings: ApplicationSdkSettingsModification | undefined;
  clientAllowedOrganizations: Array<OrganizationRid> | undefined;
}