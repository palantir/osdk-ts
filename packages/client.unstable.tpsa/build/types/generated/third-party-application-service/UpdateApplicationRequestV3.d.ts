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
