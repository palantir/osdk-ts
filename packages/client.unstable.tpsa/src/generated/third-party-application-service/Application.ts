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

import type { ApplicationDescription } from "./ApplicationDescription.js";
import type { ApplicationName } from "./ApplicationName.js";
import type { ApplicationRid } from "./ApplicationRid.js";
import type { ApplicationSdkSettings } from "./ApplicationSdkSettings.js";
import type { AuthScope } from "./AuthScope.js";
import type { ClientSpecification } from "./ClientSpecification.js";
import type { DataScopeV2 } from "./DataScopeV2.js";
import type { LegacyDataScope } from "./LegacyDataScope.js";
import type { LogoUri } from "./LogoUri.js";
import type { OrganizationRid } from "./OrganizationRid.js";
import type { PackageName } from "./PackageName.js";
export interface Application {
  rid: ApplicationRid;
  name: ApplicationName;
  description: ApplicationDescription | undefined;
  packageName: PackageName | undefined;
  logoUri: LogoUri | undefined;
  organizationRid: OrganizationRid;
  clientSpecification: ClientSpecification;
  dataScope: LegacyDataScope;
  dataScopeV2: DataScopeV2;
  authScope: AuthScope;
  sdkSettings: ApplicationSdkSettings;
  clientAllowedOrganizations: Array<OrganizationRid>;
}
