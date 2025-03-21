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
