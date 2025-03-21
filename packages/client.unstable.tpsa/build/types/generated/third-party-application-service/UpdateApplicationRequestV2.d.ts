import type { ApplicationSdkSettingsModification } from "./ApplicationSdkSettingsModification.js";
import type { AuthScope } from "./AuthScope.js";
import type { ClientSpecification } from "./ClientSpecification.js";
import type { DataScopeV2 } from "./DataScopeV2.js";
import type { OptionalStringModification } from "./OptionalStringModification.js";
import type { OrganizationRid } from "./OrganizationRid.js";
/**
* Only fields that are present in the request will be updated.
*/
export interface UpdateApplicationRequestV2 {
	name: string | undefined;
	description: OptionalStringModification | undefined;
	packageName: OptionalStringModification | undefined;
	logoUri: OptionalStringModification | undefined;
	clientSpecification: ClientSpecification | undefined;
	dataScopeV2: DataScopeV2 | undefined;
	authScope: AuthScope | undefined;
	sdkSettings: ApplicationSdkSettingsModification | undefined;
	clientAllowedOrganizations: Array<OrganizationRid> | undefined;
}
