import type { ApplicationDescription } from "./ApplicationDescription.js";
import type { ApplicationName } from "./ApplicationName.js";
import type { AuthScope } from "./AuthScope.js";
import type { ClientSpecification } from "./ClientSpecification.js";
import type { DataScopeV2 } from "./DataScopeV2.js";
import type { LogoUri } from "./LogoUri.js";
import type { MarkingId } from "./MarkingId.js";
import type { NamespaceRid } from "./NamespaceRid.js";
import type { OrganizationRid } from "./OrganizationRid.js";
import type { PackageName } from "./PackageName.js";
export interface CreateApplicationRequestV2 {
	name: ApplicationName;
	description: ApplicationDescription | undefined;
	packageName: PackageName | undefined;
	logoUri: LogoUri | undefined;
	clientSpecification: ClientSpecification;
	dataScopeV2: DataScopeV2;
	authScope: AuthScope;
	cbacMarkingIds: Array<MarkingId>;
	organizationRid: OrganizationRid | undefined;
	namespaceRid: NamespaceRid | undefined;
	clientAllowedOrganizations: Array<OrganizationRid>;
}
